package com.study.springboot;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Fail.fail;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


//@SpringBootTest : 스프링부트 Application의 모든 빈을 로드한다,
//                : 실제 서비스 환경과 유사한 상태로 만들어 준다.
//@DataJpaTest : Jpa DataSource 테스트
@WebMvcTest // 가상 HTTP 요청을 통해 테스트한다.
class HtmlControllerTest {
//  MockMvc : 웹 API 테스트를 할 때 가상의 HTTP 요청을 만들어주는 클래스이다.
    @Autowired
    private MockMvc mockMvc;

    @Test
    @DisplayName("main 테스트")
    void main() {
        MemberDto dto = new MemberDto("hong","1234");
    try {
            mockMvc.perform(get("/"))
                    .andExpect(status().isOk()) //HTTP응답 200 ok
                    .andExpect(view().name("index"))
                    .andExpect(model().attributeExists("member"))
                    .andExpect(model().attribute("list", Matchers.contains("hong","lee")))
                    .andDo(print());
            } catch (Exception e) {
            e.printStackTrace();
            fail("테스트 실패");
        }
    }
}