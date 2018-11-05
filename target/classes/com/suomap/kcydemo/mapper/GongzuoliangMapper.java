package com.suomap.kcydemo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface GongzuoliangMapper {
    public List<Map> getGongzuoliangsByGongchengId(List<Integer> gongchengIds);
}
