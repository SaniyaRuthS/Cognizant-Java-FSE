package com.example.country;
import java.util.List;
public interface CountryService{
List<Country> getAllCountries();
Country getCountryByCode(String code);
Country addCountry(Country country);
void deleteCountry(String code);
}