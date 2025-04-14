package com.study.springboot;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserRestController {
    private final UserService userService;

    @GetMapping("/check")
    public ResponseEntity<Boolean> checkDuplicate(@RequestParam String username) {
        boolean exists = userService.isUsernameExists(username);
        return ResponseEntity.ok(exists);
    }
}
