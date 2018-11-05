package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.entity.Qiandan;
import com.suomap.kcydemo.mapper.QiandanMapper;
import com.suomap.kcydemo.service.QiandanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class QiandanServiceImpl implements QiandanService {
    @Autowired
    QiandanMapper qm;
    @Override
    public List<Map> getQiandansByGongchengId(List<Integer> gongchengId) {
        List<Map> qiandans = qm.getQiandansByGongchengIds(gongchengId);
        return qiandans;
    }
}
