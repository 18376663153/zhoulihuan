package com.suomap.kcydemo.endpoint;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.suomap.kcydemo.service.CycleSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(value="/CycleSearch")
@CrossOrigin
public class CycleSearchEndpoint {
    @Autowired
    CycleSearchService cs;
    @RequestMapping("/{reportno}/{id}")
    public Map cycleSearch(@PathVariable Integer reportno,@PathVariable Integer id){
        return cs.cycleSearch(reportno,id);
    }
    @RequestMapping("/getTableData")
    public PageInfo<Map> getTableData(@RequestBody JSONObject param){
        return cs.getTableData(param);
    }

    @RequestMapping("/getTableDataSenior")
    public PageInfo<Map> getTableDataSenior(@RequestBody JSONObject param){
        return cs.getTableDataSenior(param);
    }
}
