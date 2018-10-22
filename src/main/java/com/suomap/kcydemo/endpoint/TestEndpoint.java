package com.suomap.kcydemo.endpoint;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/test")
public class TestEndpoint {
    @RequestMapping("/getUuid")
    public List getGuid(){
        List uuidList = new ArrayList();
        for (int i=20;i>=0;i--){
            uuidList.add(UUID.randomUUID().toString());
        }
        return uuidList;
    }
}
