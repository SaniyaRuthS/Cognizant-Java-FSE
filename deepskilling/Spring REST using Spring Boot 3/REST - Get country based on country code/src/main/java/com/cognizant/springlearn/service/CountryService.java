package com.cognizant.springlearn.service;
import java.util.*;import org.springframework.context.support.ClassPathXmlApplicationContext;import org.springframework.stereotype.Service;
import com.cognizant.springlearn.model.Country;
@Service
public class CountryService{
@SuppressWarnings("unchecked")
public Country getCountry(String code){
ClassPathXmlApplicationContext c=new ClassPathXmlApplicationContext("country.xml");
List<Country> list=(List<Country>)c.getBean("countryList");
Country r=list.stream().filter(x->x.getCode().equalsIgnoreCase(code)).findFirst().orElse(null);
c.close(); return r;
}}