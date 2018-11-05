package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.mapper.HetongMapper;
import com.suomap.kcydemo.service.HetongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class HetongServiceImpl implements HetongService {
    @Autowired
    HetongMapper hm;
    @Override
    public List<Map> getHetongsByGongchengId(List<Integer> gongchengId) {
        List<Map> hetongs = hm.getHetongsByGongchengIds(gongchengId);
        return hetongs;
    }
}
