package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        // 🔥 Hardcoded login (important)
        if ("surya".equals(user.getUsername()) &&
            "1234".equals(user.getPassword())) {

            return jwtService.generateToken(user.getUsername());
        }

        return "Invalid Credentials";
    }

    @GetMapping("/protected")
    public String protectedRoute() {
        return "Access Granted (Protected Data)";
    }
}