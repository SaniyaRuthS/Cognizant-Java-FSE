package com.cognizant.springlearn.controller;
import java.security.Principal;
import org.springframework.web.bind.annotation.*;
import com.cognizant.springlearn.model.AuthenticationResponse;
import com.cognizant.springlearn.util.JwtUtil;
@RestController
public class AuthenticationController{
@GetMapping("/authenticate")
public AuthenticationResponse authenticate(Principal principal){
return new AuthenticationResponse(JwtUtil.generateToken(principal.getName()));
}
}