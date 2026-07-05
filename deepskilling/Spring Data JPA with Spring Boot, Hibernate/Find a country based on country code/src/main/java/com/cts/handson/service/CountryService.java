package com.cts.handson.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.cts.handson.repository.CountryRepository;
import com.cts.handson.entity.Country;
@Service
public class CountryService{
@Autowired private CountryRepository repository;
public Country findCountryByCode(String code){return repository.findById(code).orElse(null);}
}