package com.study.springboot;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    private final List<Product> products = new ArrayList<>();
    private long nextId = 1L; // ✅ ID를 자동 증가시키기 위한 변수

    public List<Product> getAllProducts() {
        return products;
    }

    public void addProduct(Product product) {
        product.setId(nextId++); // ✅ ID 자동 부여
        products.add(product);
    }

    public void updateProduct(Long id, Product updatedProduct) {
        for (int i = 0; i < products.size(); i++) {
            Product p = products.get(i);
            if (p.getId().equals(id)) {
                p.setName(updatedProduct.getName());
                p.setPrice(updatedProduct.getPrice());
                p.setLimit_date(updatedProduct.getLimit_date());
                return;
            }
        }
    }

    public void deleteProduct(Long id) {
        products.removeIf(p -> p.getId().equals(id)); // 삭제 기능도 함께!
    }
}
