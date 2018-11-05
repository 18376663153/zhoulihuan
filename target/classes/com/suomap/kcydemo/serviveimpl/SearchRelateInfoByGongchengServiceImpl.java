package com.suomap.kcydemo.serviveimpl;


import com.suomap.kcydemo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class SearchRelateInfoByGongchengServiceImpl implements SearchRelateInfoByGongchengService {
    @Autowired
    GongchengService gcs;
    @Autowired
    HetongService hts;
    @Autowired
    QiandanService qds;
    @Autowired
    ShoukuanService sks;
    @Autowired
    TichengService tcs;
    @Autowired
    GongzuoliangService gzls;
    @Override
    public Map getRelateInfo(List<Integer> gongchengIds) {
        Map results = new HashMap();

        List<Map> gongchengs = gcs.getGongchengsByGongchengId(gongchengIds);
        List<Map> hetongs = hts.getHetongsByGongchengId(gongchengIds);
        List<Map> qiandans = qds.getQiandansByGongchengId(gongchengIds);
        List<Map> shoukuans = sks.getShoukuansByGongchengId(gongchengIds);
        List<Map> tichengs = tcs.getTichengsByGongchengId(gongchengIds);
        List<Map> gongzuoliangs = gzls.getGongzuoliangsByGongchengId(gongchengIds);

        results.put("gongchengs",gongchengs);
        results.put("hetongs",hetongs);
        results.put("qiandans",qiandans);
        results.put("shoukuans",shoukuans);
        results.put("tichengs",tichengs);
        results.put("gongzuoliangs",gongzuoliangs);
        return results;
    }
}
