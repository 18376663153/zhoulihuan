package com.suomap.kcydemo.mapper;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface UserMapper {
    @MapKey("id")
    Map<Integer, Map<String,Object>> getAllUser();
}
