package com.example.country;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/countries")
public class CountryController{
@Autowired
private CountryService service;
@GetMapping
public List<Country> getCountries(){return service.getAllCountries();}
@GetMapping("/{code}")
public Country getCountry(@PathVariable String code){return service.getCountryByCode(code);}
@PostMapping
public Country addCountry(@RequestBody Country country){return service.addCountry(country);}
@DeleteMapping("/{code}")
public void deleteCountry(@PathVariable String code){service.deleteCountry(code);}
}