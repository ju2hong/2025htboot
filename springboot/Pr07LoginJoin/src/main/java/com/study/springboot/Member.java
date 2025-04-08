package com.study.springboot;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Member {
    private String username;
    private String password;
    private String email;
    private LocalDate joindate;
}