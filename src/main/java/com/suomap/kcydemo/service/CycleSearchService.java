package com.suomap.kcydemo.service;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;

import java.util.List;
import java.util.Map;

public interface CycleSearchService {
    public Map cycleSearch(Integer reportNo, Integer id);

    PageInfo<Map> getTableData(JSONObject param);

    PageInfo<Map> getTableDataSenior(JSONObject param);
}
