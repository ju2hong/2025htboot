package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String main() {
        return "redirect:/login";
    }
    @GetMapping("/login")
    public String login() {
        return "/login";
    }
    @GetMapping("/join")
    public String join() {
        return "join";
    }
}
