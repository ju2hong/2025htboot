package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @GetMapping("/")
    @ResponseBody
    public String main(){
        return "Devtools 테스트 123"; //devtools 를 이용하면 서버 재구동 안 해도 내용이 바뀌지만 정적 페이지는 바뀌지 않음
    }
}
