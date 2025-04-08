package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("count")
public class MainController {

    @ModelAttribute("count")
    public int initCount() {
        return 0;
    }

    @GetMapping("/")
    public String main(@ModelAttribute("count")int count, Model model) {
        model.addAttribute("count",count);
        return "index";
    }
    @GetMapping("/plus")
    public String plus(@ModelAttribute("count")int count, Model model) {
        model.addAttribute("count",count+1);
        return "index";
    }
    @GetMapping("/minus")
    public String minus(@ModelAttribute("count")int count, Model model) {
        model.addAttribute("count",count-1);
        return "index";
    }
}
