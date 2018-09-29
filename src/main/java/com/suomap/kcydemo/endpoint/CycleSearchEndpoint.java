package com.suomap.kcydemo.endpoint;

import com.suomap.kcydemo.service.CycleSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
