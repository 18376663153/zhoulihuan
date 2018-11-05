package com.suomap.kcydemo.serviveimpl;

import com.suomap.kcydemo.mapper.SearchGongchengIdMapper;
import com.suomap.kcydemo.service.SearchGongchengIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class SearchGongchengIdServiceImpl implements SearchGongchengIdService {
    @Autowired
    SearchGongchengIdMapper sgm;
    @Override
    public List<Integer> getGongchengId(Integer reportNo,Integer id) {
        List<Integer> ids = null;
        if(3 == reportNo){
            ids = new ArrayList<Integer>();
            ids.add(id);
        }else if (16 == reportNo){
            ids = getGongchengIdByHetong(id);
        }else if (17 == reportNo){
            ids = getGongchengIdByQiandan(id);
        }else if (18 == reportNo){
            ids = getGongchengIdByShoukuan(id);
        }else if (11 == reportNo){

        }else if (9 == reportNo){

        }
        return ids;
    }

    private List<Integer> getGongchengIdByShoukuan(Integer id) {
        return sgm.selectGongchengIdByShoukuan(id);
    }

    private List<Integer> getGongchengIdByQiandan(Integer id) {
        return sgm.selectGongchengIdByQiandan(id);
    }

    public List<Integer> getGongchengIdByGongcheng(Integer id) {
        List<Integer> ids = new ArrayList<Integer>();
        ids.add(id);
        return ids;
    }

    public List<Integer> getGongchengIdByHetong(Integer id) {
        List<Integer> ids = new ArrayList<Integer>();
        String result = sgm.selectGongchengIdByHetong(id);
        if(null != result){
            String[] arr = result.split(",");
            for (int i=arr.length-1;i>=0;i--){
                Integer integer = Integer.valueOf(arr[i]);
                ids.add(integer);
            }
        }
        return ids;
    }
}
