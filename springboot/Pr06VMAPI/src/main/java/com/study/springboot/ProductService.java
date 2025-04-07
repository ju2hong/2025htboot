package com.study.springboot;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    private final List<Product> products = new ArrayList<>();

    public List<Product> getAllProducts() {
        return products;
    }

    public void addProduct(Product product) {
        products.add(product);
    }
}

