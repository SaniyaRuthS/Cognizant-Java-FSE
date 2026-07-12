package com.example.employees.controller;
import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.employees.model.Employee;
import com.example.employees.service.EmployeeService;
@RestController
public class EmployeeController{
 private final EmployeeService service;
 public EmployeeController(EmployeeService service){this.service=service;}
 @GetMapping("/employees")
 public List<Employee> getAllEmployees(){
   return service.getAllEmployees();
 }
}
