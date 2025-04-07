package com.study.springboot;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data // @Getter, @Setter, @ToString, @EqualsAndHashCode 포함
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    private String name; // 상품명
    private int price; // 가격
    private LocalDate limit_date; // 유통기한
}