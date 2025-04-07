package com.study.springboot;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository : JPA DAO 클래스에 적용하고, @Component가 내부에 있음
//@Service : 서비스 로직 클래스에 적용되고, @Component가 내부에 있음
//@Controller : 컨트롤 인터페이스(HTTP 요청처리)를 구현하고,
//              @Component가 내부에 있음

//JpaRepository : 스프링 JPA 라이브러리에서 Entity에 대한 기본적인
//              : 조회, 삽입, 수정, 삭제가 가능하도록 만든 인터페이스이다.

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity,Long> {
}
