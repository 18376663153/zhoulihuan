package com.suomap.kcydemo.mapper;

import com.alibaba.fastjson.JSONObject;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface CycleSearchMapper {
    List<Map> getTableData(JSONObject sqlParam);

    List<Map> getTableDataSenior(JSONObject sqlParam);
}
