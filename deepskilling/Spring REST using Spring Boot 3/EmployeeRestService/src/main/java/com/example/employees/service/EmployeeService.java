package com.example.employees.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.employees.dao.EmployeeDao;
import com.example.employees.model.Employee;
@Service
public class EmployeeService{
 private final EmployeeDao dao;
 public EmployeeService(EmployeeDao dao){this.dao=dao;}
 public List<Employee> getAllEmployees(){return dao.getAllEmployees();}
}
