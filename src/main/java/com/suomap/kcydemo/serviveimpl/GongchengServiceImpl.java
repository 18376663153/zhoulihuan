package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.mapper.GongchengMapper;
import com.suomap.kcydemo.service.GongchengService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class GongchengServiceImpl implements GongchengService {
    @Autowired
    public GongchengMapper gm;
    @Override
    public List<Map> getGongchengsByGongchengId(List<Integer> gongchengId) {
        List<Map> gongchengs = gm.getGongchengsByIds(gongchengId);
        return gongchengs;
    }
}
