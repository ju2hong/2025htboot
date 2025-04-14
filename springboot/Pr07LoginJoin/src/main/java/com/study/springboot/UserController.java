package com.study.springboot;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@AllArgsConstructor
@Controller
public class UserController {

    private final UserService userService;

    @GetMapping("/")
    public String main() {
        return "redirect:/join";
    }
    @GetMapping("/join")
    public String joinPage() {
        return "join"; // join.html 반환
    }
    // 회원가입 처리
    @PostMapping("/join")
    public String join(@RequestParam String inputName,
                       @RequestParam String inputEmail,
                       @RequestParam String inputPw,
                       @RequestParam String inputPw2,
                       RedirectAttributes redirectAttributes) {
        if (!inputPw.equals(inputPw2)) {
            redirectAttributes.addFlashAttribute("error", "비밀번호가 일치하지 않습니다.");
            return "redirect:/join";
        }
        userService.sigin(inputName, inputEmail, inputPw);
        redirectAttributes.addFlashAttribute("success", "회원가입이 완료되었습니다!");
        return "redirect:/login";
    }
    @GetMapping("/login")
    public String login() {
        return "/login";
    }
    // 로그인 처리
    @PostMapping("/login")
    public String login(@RequestParam String inputName,
                        @RequestParam String inputPw,
                        RedirectAttributes redirectAttributes) {
        User user = userService.login(inputName, inputPw);
        if (user != null) {
            redirectAttributes.addFlashAttribute("success", "로그인 성공!");
            return "redirect:/login";
        } else {
            redirectAttributes.addFlashAttribute("error", "이메일 또는 비밀번호가 일치하지 않습니다.");
            return "redirect:/login";
        }
    }
}
