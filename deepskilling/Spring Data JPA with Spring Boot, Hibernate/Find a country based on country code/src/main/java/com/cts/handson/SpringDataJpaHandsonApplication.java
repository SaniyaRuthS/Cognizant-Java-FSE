package com.cts.handson;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import com.cts.handson.service.CountryService;
@SpringBootApplication
public class SpringDataJpaHandsonApplication implements CommandLineRunner{
@Autowired CountryService service;
public static void main(String[] args){SpringApplication.run(SpringDataJpaHandsonApplication.class,args);}
public void run(String... args){System.out.println(service.findCountryByCode("IN"));}
}