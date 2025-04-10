package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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

    @GetMapping("/edit/{id}")
    public String editPage(@PathVariable Long id) {
        return "edit"; // templates/edit.html 반환
    }

}

