package com.study.springboot.answer;

import com.study.springboot.question.Question;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "TEXT")
    private Integer content;

    private LocalDateTime createDate;

    @ManyToOne
    private Question question;
}
