package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @GetMapping("/")
    public String main() {
        return "redirect:/calculate";
    }

    @GetMapping("/calculate")
    public String showForm(Model model) {
        model.addAttribute("calc", new Calc());
        model.addAttribute("result", "");
        return "calc";
    }

    @PostMapping("/calculate")
    public String calculate(
            @ModelAttribute Calc calc,
            @RequestParam String operation,
            Model model
    ) {
        int num1 = calc.getNum1();
        int num2 = calc.getNum2();
        String result = "0";

        switch (operation) {
            case "add":
                result = String.valueOf(num1 + num2);
                break;
            case "sub":
                result = String.valueOf(num1 - num2);
                break;
            case "mul":
                result = String.valueOf(num1 * num2);
                break;
            case "div":
                if (num2 != 0) {
                    double divResult = (double) num1 / num2;
                    result = String.format("%.2f", divResult);
                } else {
                    result = "0";
                }
                break;
        }

        model.addAttribute("calc", calc);
        model.addAttribute("result", result);
        return "calc";
    }

}
