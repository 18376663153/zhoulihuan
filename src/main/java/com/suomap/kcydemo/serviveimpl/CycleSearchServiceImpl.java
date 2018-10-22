package com.suomap.kcydemo.serviveimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.suomap.kcydemo.mapper.CycleSearchMapper;
import com.suomap.kcydemo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CycleSearchServiceImpl implements CycleSearchService {
    @Autowired
    SearchGongchengIdService sgs;
    @Autowired
    SearchRelateInfoByGongchengService srs;
    @Autowired
    CycleSearchMapper cm;
    @Override
    public Map cycleSearch(Integer reportNo, Integer id) {
        List<Integer> gongchengIds = sgs.getGongchengId(reportNo,id);
        Map results = srs.getRelateInfo(gongchengIds);
        return results;
    }

    @Override
    public PageInfo<Map> getTableData(JSONObject param) {
        Integer currentPage = param.getInteger("currentPage");
        JSONArray inputInfo = param.getJSONArray("inputInfo");
//        JSONArray inputTables = param.getJSONArray("inputTables");
        String keyword = param.getString("keyword");
        JSONArray outputInfo = param.getJSONArray("outputInfo");
//        JSONArray outputTables = param.getJSONArray("outputTables");
        JSONArray inAndOutTableArr = param.getJSONArray("inAndOutTableArr");
        Integer pageSize = param.getInteger("pageSize");
        JSONObject sqlParam = new JSONObject();

        if (inputInfo.size() == 0){
            inputInfo = outputInfo;
        }
        JSONArray sqlInputInfo = new JSONArray();
        for (int i=0,l=inputInfo.size()-1;i<l;i++){
            String tableName = inputInfo.getJSONObject(i).getString("TableName");
            String fieldName = inputInfo.getJSONObject(i).getString("FieldName");
            sqlInputInfo.add(tableName + "." + fieldName);
        }
        JSONArray sqlOutputInfo = new JSONArray();
        for (int i=0,l=outputInfo.size()-1;i<l;i++){
            JSONObject jo = new JSONObject();
            String tableName = outputInfo.getJSONObject(i).getString("TableName");
            String fieldName = outputInfo.getJSONObject(i).getString("FieldName");
            jo.put("field",tableName + "." + fieldName);
            jo.put("alias",tableName + "_" + fieldName);
            sqlOutputInfo.add(jo);
        }
        sqlParam.put("keyword",keyword.replaceAll("\\s+","%"));
        sqlParam.put("inputInfo",sqlInputInfo);
        sqlParam.put("outputInfo",sqlOutputInfo);
//        sqlParam.put("inputTables",inputTables.toJSONString());
//        sqlParam.put("outputTables",outputTables.toJSONString());
        sqlParam.put("inAndOutTableArr",inAndOutTableArr.toJSONString());
        PageHelper.startPage(currentPage,pageSize);
        List<Map> tabledata = cm.getTableData(sqlParam);
        PageInfo<Map> mapPageInfo = new PageInfo<>(tabledata);
        return mapPageInfo;
    }

    @Override
    public PageInfo<Map> getTableDataSenior(JSONObject param) {
        Integer currentPage = param.getInteger("currentPage");
        JSONArray inputInfo = param.getJSONArray("inputInfo");
//        JSONArray inputTables = param.getJSONArray("inputTables");
        JSONObject seniorSearchParam = param.getJSONObject("seniorSearchParam");
        JSONArray outputInfo = param.getJSONArray("outputInfo");
//        JSONArray outputTables = param.getJSONArray("outputTables");
        JSONArray inAndOutTableArr = param.getJSONArray("inAndOutTableArr");
        Integer pageSize = param.getInteger("pageSize");
        JSONObject sqlParam = new JSONObject();

        if (inputInfo.size() == 0){
            inputInfo = outputInfo;
        }
        JSONArray sqlInputInfo = new JSONArray();
        for (int i=0,l=inputInfo.size();i<l;i++){
            JSONObject jo = new JSONObject();
            String tableName = inputInfo.getJSONObject(i).getString("TableName");
            String fieldName = inputInfo.getJSONObject(i).getString("FieldName");
            jo.put("field",tableName + "." + fieldName);
            String fieldKeyword = seniorSearchParam.getJSONObject(tableName).getString(fieldName);
            if (fieldKeyword == null){
                fieldKeyword = "";
            }
            jo.put("keyword",fieldKeyword);
            sqlInputInfo.add(jo);
        }
        JSONArray sqlOutputInfo = new JSONArray();
        for (int i=0,l=outputInfo.size();i<l;i++){
            JSONObject jo = new JSONObject();
            String tableName = outputInfo.getJSONObject(i).getString("TableName");
            String fieldName = outputInfo.getJSONObject(i).getString("FieldName");
            jo.put("field",tableName + "." + fieldName);
            jo.put("alias",tableName + "_" + fieldName);
            sqlOutputInfo.add(jo);
        }
        sqlParam.put("inputInfo",sqlInputInfo);
        sqlParam.put("outputInfo",sqlOutputInfo);
//        sqlParam.put("inputTables",inputTables.toJSONString());
//        sqlParam.put("outputTables",outputTables.toJSONString());
        sqlParam.put("inAndOutTableArr",inAndOutTableArr.toJSONString());
        PageHelper.startPage(currentPage,pageSize);
        List<Map> tabledata = cm.getTableDataSenior(sqlParam);
        PageInfo<Map> mapPageInfo = new PageInfo<>(tabledata);
        return mapPageInfo;
    }
}
