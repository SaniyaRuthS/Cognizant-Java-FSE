package com.cts.handson.test;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import com.cts.handson.service.CountryService;
@SpringBootTest
class CountryTest{
@Autowired CountryService service;
@Test void testFindCountry(){assertEquals("India",service.findCountryByCode("IN").getName());}
}