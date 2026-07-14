package com.cognizant.employee.dao;
import java.util.ArrayList;
import com.cognizant.employee.model.Employee;
public class EmployeeDao{
public static ArrayList<Employee> EMPLOYEE_LIST=new ArrayList<>();
public EmployeeDao(){
 // TODO: Read employee list from employee.xml
}
public ArrayList<Employee> getAllEmployees(){
 return EMPLOYEE_LIST;
}
}