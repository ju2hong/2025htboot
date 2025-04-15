package com.study.springboot.service;

import com.study.springboot.config.JwtJtil;
import com.study.springboot.dto.LoginRequest;
import com.study.springboot.dto.SignupRequest;
import com.study.springboot.entity.User;
import com.study.springboot.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtJtil jwtUtil;

    public void signup(SignupRequest request) {
        //이미 존재하는 유저인지 확인
        if(userRepository.existsByUsername(request.getUsername())) {
            throw new IllegalArgumentException("이미 존재하는 사용자 입니다");
        }
        if(userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("이미 사용중인 이메일 입니다");
        }
        //비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        //유저 저장
        User user = User.builder()
                .username(request.getUsername())
                .password(encodedPassword)
                .email(request.getEmail())
                .role("USER")
                .build();
        userRepository.save(user);
    }

    public String login(LoginRequest request) {
        // 사용자 확인
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다"));

        // 비밀번호 비교
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }

        // 토큰 생성 (이 부분은 JWT 설정 필요)
        return jwtUtil.createToken(user.getUsername(), user.getRole());
    }

}
