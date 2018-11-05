package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.entity.Gongzuoliang;
import com.suomap.kcydemo.mapper.GongzuoliangMapper;
import com.suomap.kcydemo.service.GongzuoliangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class GongzuoliangServiceImpl implements GongzuoliangService {
    @Autowired
    GongzuoliangMapper gm;
    @Override
    public List<Map> getGongzuoliangsByGongchengId(List<Integer> gongchengId) {
        List<Map> gongzuoliangs = gm.getGongzuoliangsByGongchengId(gongchengId);
        return gongzuoliangs;
    }
}
