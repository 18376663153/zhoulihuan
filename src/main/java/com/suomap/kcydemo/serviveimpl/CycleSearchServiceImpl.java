package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CycleSearchServiceImpl implements CycleSearchService {
    @Autowired
    SearchGongchengIdService sgs;
    @Autowired
    SearchRelateInfoByGongchengService srs;
    @Override
    public Map cycleSearch(Integer reportNo, Integer id) {
        List<Integer> gongchengIds = sgs.getGongchengId(reportNo,id);
        Map results = srs.getRelateInfo(gongchengIds);
        return results;
    }
}
