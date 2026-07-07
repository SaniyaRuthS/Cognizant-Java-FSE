package com.cognizant.springlearn.model;
public class AuthenticationResponse{
private String token;
public AuthenticationResponse(String t){token=t;}
public String getToken(){return token;}
public void setToken(String t){token=t;}
}