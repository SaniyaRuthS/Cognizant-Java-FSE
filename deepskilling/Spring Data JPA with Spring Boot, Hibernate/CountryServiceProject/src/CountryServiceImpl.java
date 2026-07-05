package com.example.country;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class CountryServiceImpl implements CountryService{
@Autowired
private CountryRepository repository;
public List<Country> getAllCountries(){return repository.findAll();}
public Country getCountryByCode(String code){return repository.findById(code).orElse(null);}
public Country addCountry(Country country){return repository.save(country);}
public void deleteCountry(String code){repository.deleteById(code);}
}