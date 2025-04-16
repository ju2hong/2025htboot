package com.study.springboot.entity;

import com.study.springboot.dto.MemberJoinDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
@Getter //@Setter 는 커스텀 메소드로 만들것임
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "member")
@Builder
public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_id")
    private String userId;
    @Column(name = "user_pw")
    private String userPw;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "user_role")
    private String userRole;
    @Column(name = "join_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate joinDate;

    public MemberJoinDto toSaveDto() {
        return MemberJoinDto.builder()
                .id(id)
                .userId(userId)
                .userPw(userPw)
                .userName(userName)
                .userRole(userRole)
                .joinDate(joinDate)
                .build();
    }
}
