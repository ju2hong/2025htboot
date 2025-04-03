package com.study.springboot;

import com.study.springboot.question.Question;
import com.study.springboot.question.QuestionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class SbbApplicationTests {

	@Autowired
	private QuestionRepository questionRepository;
	@Test
	void contextLoads() {
		Question q = this.questionRepository.findBySubject("sbb가 무엇인가요?");
		assertEquals(1,q.getId());

	}


}
