package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MainController {
    private final List<Product> productList = new ArrayList<>();
    private Long idCounter = 1L; // ID 자동 증가용 카운터
    @GetMapping("/")
    public String main() {
        return "redirect:/index";
    }
    @GetMapping("/index")
    public String index(Model model) {
        model.addAttribute("products",productList);
        model.addAttribute("productCount",productList.size());
        return "index";
    }
    @GetMapping("/add")
    public String add(Model model) {
        model.addAttribute("product",new Product());
        return "add";
    }
    @PostMapping("/add")
    public String addProduct(@ModelAttribute Product product,RedirectAttributes redirectAttributes) {
        product.setId(idCounter++); // 자동 증가 ID 부여
        productList.add(product);
        redirectAttributes.addFlashAttribute("msg", "상품이 추가되었습니다!");
        return "redirect:/index";
    }
    @GetMapping("/edit")
    public String edit(@RequestParam("id") Long id, Model model) {
        for (Product p : productList) {
            if (p.getId().equals(id)) {
                model.addAttribute("product", p);
                return "edit";
            }
        }
        return "redirect:/index"; // 못 찾으면 리스트로 이동
    }

    @PostMapping("/edit")
    public String edit(@ModelAttribute Product updatedProduct, RedirectAttributes redirectAttributes) {
        for (Product p : productList) {
            if (p.getId().equals(updatedProduct.getId())) {
                p.setName(updatedProduct.getName());
                p.setPrice(updatedProduct.getPrice());
                p.setLimit_date(updatedProduct.getLimit_date());
                break;
            }
        }
        redirectAttributes.addFlashAttribute("msg", "상품이 수정되었습니다.");
        return "redirect:/index";
    }
    @PostMapping("/delete")
    public String delete(@RequestParam("id") Long id, RedirectAttributes redirectAttributes) {
        productList.removeIf(p -> p.getId().equals(id));
        redirectAttributes.addFlashAttribute("msg", "상품이 삭제되었습니다.");
        return "redirect:/index";
    }

}
