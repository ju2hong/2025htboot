package com.study.springboot;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class MainController {
    // 생성자 주입
    private final MemberRepository memberRepository;
    //필드주입
    //@Autowired
    //private final MemberRepository memberRepository;

    @GetMapping("/")
    public String main(Model model) {
        System.out.println("memberRepository = "+memberRepository);

        memberRepository.save(new MemberEntity(Long.valueOf(1),
                "hong","1234","홍길동","ROLE_USER", LocalDate.now()));
//@GeneratedValue 설정이므로, 수동으로 ID값을 쓰지 말것
//        memberRepository.save(new MemberEntity(Long.valueOf(2),
//                "tom","5678","톰아저씨","ROLE_USER", LocalDate.now()));
//
        List<MemberEntity> list = memberRepository.findAll();
        System.out.println("list.size() ="+list.size());

        model.addAttribute("list",list);

        return "index"; //index.html로 응답
    }
}
