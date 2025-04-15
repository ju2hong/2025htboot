package com.study.springboot.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,unique = true)
    private String username; // 사용자 아이디

    @Column(nullable = false)
    private String password; // 암호화된 비밀번호

    @Column(nullable = false,unique = true)
    private String email;

    private String role;

    @CreationTimestamp // 자동으로 생성시간 저장
    private LocalDateTime createdAt;
}
