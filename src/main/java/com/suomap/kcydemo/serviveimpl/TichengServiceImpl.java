package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.entity.Ticheng;
import com.suomap.kcydemo.mapper.TichengMapper;
import com.suomap.kcydemo.service.TichengService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TichengServiceImpl implements TichengService {
    @Autowired
    TichengMapper tm;
    @Override
    public List<Map> getTichengsByGongchengId(List<Integer> gongchengId) {
        List<Map> tichengs = tm.getTichengsByGongchengIds(gongchengId);
        return tichengs;
    }
}
