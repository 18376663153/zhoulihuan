package com.suomap.kcydemo.serviveimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.suomap.kcydemo.mapper.TemplateMapper;
import com.suomap.kcydemo.service.TemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class TemplateServiceImpl implements TemplateService {
    @Autowired
    TemplateMapper tm;
    @Override
    public List<Map> getAllTemplate() {
        return tm.getAllTemplate();
    }

    @Override
    public Map getTemplateById(String id) {
        return tm.getTemplateById(id);
    }

    @Override
    public Map getInputOutputByTemplateId(String templateId) {
        HashMap<String, List> resultInfo = new HashMap<>();
        Map template = getTemplateById(templateId);
        List inputInfo = getInputByConfigId(template.get("InputConfigId").toString());
        List outputInfo = getOutputByConfigId(template.get("OutputConfigId").toString());
        resultInfo.put("inputInfo",inputInfo);
        resultInfo.put("outputInfo",outputInfo);
        return resultInfo;
    }

    @Override
    public List getInputByConfigId(String inputConfigId) {
        return tm.getInputByConfigId(inputConfigId);
    }

    @Override
    public List getOutputByConfigId(String outputConfigId) {
        return tm.getOutputByConfigId(outputConfigId);
    }

    @Override
    @Transactional
    public void saveAsNewTemplate(JSONObject param) {
        String newTemplateName = param.getString("newTemplateName");
        JSONArray inputInfo = param.getJSONArray("inputInfo");
        JSONArray outputInfo = param.getJSONArray("outputInfo");

        Map insertTemplateParam = new HashMap();
        String templateId = UUID.randomUUID().toString();
        String inputConfigId = UUID.randomUUID().toString();
        String outputConfigId = UUID.randomUUID().toString();
        insertTemplateParam.put("TemplateId", templateId);
        insertTemplateParam.put("TemplateName",newTemplateName);
        insertTemplateParam.put("InputConfigId",inputConfigId);
        insertTemplateParam.put("OutputConfigId",outputConfigId);
        tm.insertTempate(insertTemplateParam);

//        List insertInputTemplateParam = new ArrayList();
        for (int i=0,l=inputInfo.size();i<l;i++){
            JSONObject currJsonObject = inputInfo.getJSONObject(i);
            Map insertInputItem = new HashMap();
            insertInputItem.put("InputTemplateId",UUID.randomUUID().toString());
            insertInputItem.put("InputConfigId",inputConfigId);
            insertInputItem.put("TableName",currJsonObject.getString("TableName"));
            insertInputItem.put("FieldName",currJsonObject.getString("FieldName"));
            insertInputItem.put("Type",currJsonObject.getString("Type")==null?"string":currJsonObject.getString("Type"));
            tm.insertInputTempate(insertInputItem);
//            insertInputTemplateParam.add(insertInputItem);
        }
//        tm.insertInputTempate(insertInputTemplateParam);

//        List insertOutputTemplateParam = new ArrayList();
        for (int i=0,l=outputInfo.size();i<l;i++){
            JSONObject currJsonObject = outputInfo.getJSONObject(i);
            Map insertOutputItem = new HashMap();
            insertOutputItem.put("OutputTemplateId",UUID.randomUUID().toString());
            insertOutputItem.put("OutputConfigId",outputConfigId);
            insertOutputItem.put("TableName",currJsonObject.getString("TableName"));
            insertOutputItem.put("FieldName",currJsonObject.getString("FieldName"));
            insertOutputItem.put("Type",currJsonObject.getString("Type")==null?"string":currJsonObject.getString("Type"));
            tm.insertOutputTempate(insertOutputItem);
//            insertOutputTemplateParam.add(insertOutputItem);
        }
//        tm.insertOutputTempate(insertOutputTemplateParam);
    }

}
