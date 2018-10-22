package com.suomap.kcydemo.service;

import com.alibaba.fastjson.JSONObject;

import java.util.List;
import java.util.Map;

public interface TemplateService {

    List<Map> getAllTemplate();

    Map getTemplateById(String id);

    Map getInputOutputByTemplateId(String templateId);

    List getInputByConfigId(String inputConfigId);

    List getOutputByConfigId(String outputConfigId);

    void saveAsNewTemplate(JSONObject param);
}
