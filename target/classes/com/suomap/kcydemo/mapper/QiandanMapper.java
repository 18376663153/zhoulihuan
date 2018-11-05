package com.suomap.kcydemo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface QiandanMapper {
    public List<Map> getQiandansByGongchengIds(List<Integer> gongchengIds);
}
