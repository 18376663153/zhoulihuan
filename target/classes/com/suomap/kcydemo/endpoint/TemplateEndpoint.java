package com.suomap.kcydemo.endpoint;

import com.alibaba.fastjson.JSONObject;
import com.suomap.kcydemo.service.TemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Template")
@CrossOrigin
public class TemplateEndpoint {
    @Autowired
    TemplateService ts;
    @RequestMapping("/getAllTemplate")
    public List<Map> getAllTemplate(){

        return ts.getAllTemplate();
    }
    @RequestMapping("/getInputOutputByTemplateId/{templateId}")
    public Map getInputOutputByTemplateId(@PathVariable String templateId){
        return ts.getInputOutputByTemplateId(templateId);
    }
    @RequestMapping("/saveAsNewTemplate")
    public void saveAsNewTemplate(@RequestBody JSONObject param){
        ts.saveAsNewTemplate(param);
    }
}
