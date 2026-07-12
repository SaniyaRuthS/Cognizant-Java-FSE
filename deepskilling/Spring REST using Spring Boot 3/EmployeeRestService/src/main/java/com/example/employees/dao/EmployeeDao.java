package com.example.employees.dao;
import java.util.*;
import org.springframework.stereotype.Repository;
import com.example.employees.model.*;
@Repository
public class EmployeeDao{
 static final List<Employee> EMPLOYEE_LIST=new ArrayList<>();
 static{
  Department it=new Department(1,"IT");
  Department hr=new Department(2,"HR");
  EMPLOYEE_LIST.add(new Employee(101,"John",it));
  EMPLOYEE_LIST.add(new Employee(102,"Mary",hr));
  EMPLOYEE_LIST.add(new Employee(103,"David",it));
  EMPLOYEE_LIST.add(new Employee(104,"Sara",hr));
 }
 public List<Employee> getAllEmployees(){ return EMPLOYEE_LIST; }
}
