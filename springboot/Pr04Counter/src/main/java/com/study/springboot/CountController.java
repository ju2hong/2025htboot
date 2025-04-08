package com.study.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class CountController {

    private int count = 0;

    @GetMapping("/count")
    public Map<String,Integer> getCount() {
        Map<String,Integer> map = new HashMap<>();
        map.put("count",count);
        return map;
    }

    @PostMapping("/plus")
    public Map<String,Integer> plus() {
        count++;
        return getCount();
    }
    @PostMapping("/minus")
    public Map<String,Integer> minus() {
        count--;
        return getCount();
    }
}
