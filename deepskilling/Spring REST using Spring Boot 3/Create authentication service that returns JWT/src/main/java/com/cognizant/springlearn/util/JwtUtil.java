package com.cognizant.springlearn.util;
import io.jsonwebtoken.*;import io.jsonwebtoken.security.Keys;import java.nio.charset.StandardCharsets;import java.util.*;
public class JwtUtil{
private static final String KEY="01234567890123456789012345678901";
public static String generateToken(String user){
return Jwts.builder().setSubject(user).setIssuedAt(new Date())
.setExpiration(new Date(System.currentTimeMillis()+1200000))
.signWith(Keys.hmacShaKeyFor(KEY.getBytes(StandardCharsets.UTF_8)),SignatureAlgorithm.HS256).compact();
}}