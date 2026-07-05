package com.cts.handson.service;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cts.handson.entity.Country;
import com.cts.handson.repository.CountryRepository;

@Service
public class CountryService{
@Autowired CountryRepository repo;
public Country hql(String name){return repo.findCountryByName(name);}
public List<Country> nativeQuery(String text){return repo.searchCountry(text);}
}
