package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String main() {
        return "calc";
    }
    @GetMapping("/add")
    public String add() {
        return "index";
    }
    @GetMapping("/sub")
    public String sub() {
        return "index";
    }
    @GetMapping("/mul")
    public String mul() {
        return "index";
    }
    @GetMapping("/div")
    public String div() {
        return "index";
    }
}
