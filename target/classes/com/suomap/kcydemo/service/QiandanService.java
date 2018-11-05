package com.suomap.kcydemo.service;

import java.util.List;
import java.util.Map;

public interface QiandanService {
    public List<Map> getQiandansByGongchengId(List<Integer> gongchengId);
}
