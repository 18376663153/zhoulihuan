package com.suomap.kcydemo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SearchGongchengIdMapper {
    public String selectGongchengIdByHetong(Integer id);

    public List<Integer> selectGongchengIdByQiandan(Integer id);

    List<Integer> selectGongchengIdByShoukuan(Integer id);
}
