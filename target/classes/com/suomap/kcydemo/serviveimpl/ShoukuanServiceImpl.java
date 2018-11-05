package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.entity.Shoukuan;
import com.suomap.kcydemo.mapper.ShoukuanMapper;
import com.suomap.kcydemo.service.ShoukuanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ShoukuanServiceImpl implements ShoukuanService {
    @Autowired
    ShoukuanMapper sm;
    @Override
    public List<Map> getShoukuansByGongchengId(List<Integer> gongchengId) {
        List<Map> shoukuans = sm.getShoukuansByGongchengIds(gongchengId);
        return shoukuans;
    }
}
