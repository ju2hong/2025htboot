package com.study.springboot;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // 상품 목록 반환 (프론트 fetch("/api/products")에서 호출)
    @GetMapping("/products")
    public List<Product> getProducts() {
        return productService.getAllProducts(); // 상품 리스트 반환
    }

    // 상품 추가 페이지로 이동 (타임리프 HTML 페이지 사용 시)
    @GetMapping("/add")
    public String addProductPage(Model model) {
        model.addAttribute("product", new Product());
        return "add"; // templates/add.html
    }

    // JSON 데이터를 받는 POST 엔드포인트
    @PostMapping("/products")
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }

}
