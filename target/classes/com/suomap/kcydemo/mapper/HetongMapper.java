package com.suomap.kcydemo.mapper;

import com.suomap.kcydemo.entity.Hetong;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface HetongMapper {
    public List<Map> getHetongsByGongchengIds(List<Integer> gongchengIds);
}
