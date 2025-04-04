package com.study.springboot;

import lombok.*;

// lombok의 @Value
//  1) final, private, getter, equals, toString 등이 생성됨
//     setter가 빠짐

@Value
public class Member2 {

     String username;
     String password;
}
