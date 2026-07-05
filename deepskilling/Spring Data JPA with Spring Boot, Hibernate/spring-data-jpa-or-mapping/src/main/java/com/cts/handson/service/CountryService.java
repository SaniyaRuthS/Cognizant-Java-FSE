package com.cts.handson.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cts.handson.entity.Country;
import com.cts.handson.repository.CountryRepository;
@Service
public class CountryService{
@Autowired private CountryRepository repository;
public Country saveCountry(Country c){return repository.save(c);}
}