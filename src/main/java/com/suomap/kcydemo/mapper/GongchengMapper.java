package com.suomap.kcydemo.mapper;

import com.suomap.kcydemo.entity.Gongcheng;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface GongchengMapper {
    public List<Map> getGongchengsByIds(List<Integer> ids);
}
