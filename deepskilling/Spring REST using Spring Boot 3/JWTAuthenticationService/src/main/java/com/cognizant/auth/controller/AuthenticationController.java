
package com.cognizant.auth.controller;

import java.util.Base64;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String,String> authenticate(@RequestHeader("Authorization") String authHeader) {

        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));

        String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values[1];

        if("user".equals(username) && "pwd".equals(password)) {
            return Map.of("token",
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNTcwMzc5NDc0LCJleHAiOjE1NzAzODA2NzR9.t3LRvlCV-hwKfoqZYlaVQqEUiBloWcWn0ft3tgv0dL0");
        }

        throw new RuntimeException("Invalid Credentials");
    }
}
