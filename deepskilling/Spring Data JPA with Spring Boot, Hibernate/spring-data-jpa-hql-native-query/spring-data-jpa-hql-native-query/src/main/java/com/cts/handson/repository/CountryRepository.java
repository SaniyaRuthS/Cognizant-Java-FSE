package com.cts.handson.repository;
import java.util.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import com.cts.handson.entity.Country;

public interface CountryRepository extends JpaRepository<Country,String>{

@Query("FROM Country c WHERE c.name=:name")
Country findCountryByName(@Param("name") String name);

@Query(value="SELECT * FROM country WHERE co_name LIKE %:text%",nativeQuery=true)
List<Country> searchCountry(@Param("text") String text);

}
