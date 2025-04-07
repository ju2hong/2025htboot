package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HtmlController {

    @GetMapping("/")  // 메인 페이지
    public String main() {
        return "index";
    }

    @GetMapping("/add")  // 상품 추가 페이지
    public String addPage() {
        return "add";
    }

}

