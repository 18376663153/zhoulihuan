package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.mapper.UserMapper;
import com.suomap.kcydemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper um;
    @Override
    public Map<Integer, Map<String,Object>> getAllUser() {
        return um.getAllUser();
    }
}
