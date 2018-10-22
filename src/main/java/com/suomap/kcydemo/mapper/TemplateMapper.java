package com.suomap.kcydemo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Repository
@Mapper
public interface TemplateMapper {
    List<Map> getAllTemplate();

    List getInputByConfigId(String inputConfigId);

    List getOutputByConfigId(String outputConfigId);

    Map getTemplateById(String id);

    void insertTempate(Map insertTemplateParam);

    void insertInputTempate(Map insertIntputItem);

    void insertOutputTempate(Map insertOutputItem);
}
