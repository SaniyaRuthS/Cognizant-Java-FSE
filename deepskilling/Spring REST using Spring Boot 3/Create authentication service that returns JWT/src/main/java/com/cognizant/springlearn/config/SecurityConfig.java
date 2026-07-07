package com.cognizant.springlearn.config;
import org.springframework.context.annotation.*;import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.*;import org.springframework.security.crypto.password.*;import org.springframework.security.web.SecurityFilterChain;
@Configuration
public class SecurityConfig{
@Bean SecurityFilterChain filter(HttpSecurity http)throws Exception{
http.csrf(c->c.disable()).authorizeHttpRequests(a->a.anyRequest().authenticated()).httpBasic();
return http.build();}
@Bean UserDetailsService uds(){
UserDetails u=User.withUsername("user").password(passwordEncoder().encode("pwd")).roles("USER").build();
return new InMemoryUserDetailsManager(u);}
@Bean PasswordEncoder passwordEncoder(){return new BCryptPasswordEncoder();}
}