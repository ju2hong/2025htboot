package com.study.springboot;

import lombok.Data;

//DTO : data tranfer object - 계층간에 데이터 전달시 사용하는 클래스
//VO : View Object - 주로 Read 용도로 사용하는 클래스
//DAO : data access object - 모델(DB)에 데이터 전달시 사용하는 클래스
//Entity : DB 테이블 필드와 1:1 매칭이되는 클래스

//Controller : Http 요청을 처리하는 용도의 클래스
//Service : 로직을 처리하는 용도의 클래스
//Repository : 주로 모델(DB) 처리하는 용도의 클래스

@Data
public class ReqDto {
    private String username;
    private String password;
}
