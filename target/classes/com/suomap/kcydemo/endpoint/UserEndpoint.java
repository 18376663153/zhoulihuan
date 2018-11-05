package com.suomap.kcydemo.endpoint;

import com.suomap.kcydemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserEndpoint {
    @Autowired
    private UserService us;
    @RequestMapping("/getAllUser")
    public Map<Integer,Map<String,Object>> getAllUser(){
        return us.getAllUser();
    }
}
