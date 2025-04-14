package com.study.springboot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);  // 로그 객체 생성
    private final List<User> userList = new ArrayList<>();

    //회원가입
    public void signup(String username, String email, String password) {
        userList.add(new User(username,email,password));
        logger.info("새로운 사용자 가입: {} - 이메일: {}", username, email);  // 가입된 사용자 정보 로그 출력
        logger.info("현재 등록된 사용자 수: {}", userList.size());  // 현재 등록된 사용자 수 로그 출력

    }

    //로그인
    public User login(String username, String password) {
        return userList.stream()
                .filter(user -> user.getUsername().equals(username)&&user.getPassword().equals(password))
                .findFirst()
                .orElse(null);
    }
    //중복 확인
    public boolean isUsernameExists(String username) {
        return userList.stream()
                .anyMatch(user -> user.getUsername().equals(username));
    }

    //디버깅용
    public List<User> getAllUsers() {
        return userList;
    }
}
