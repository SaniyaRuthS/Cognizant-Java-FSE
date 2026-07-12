package com.example.employees.model;
public class Employee{
 private int id; private String name; private Department department;
 public Employee(){}
 public Employee(int id,String name,Department d){this.id=id;this.name=name;this.department=d;}
 public int getId(){return id;} public void setId(int id){this.id=id;}
 public String getName(){return name;} public void setName(String name){this.name=name;}
 public Department getDepartment(){return department;} public void setDepartment(Department d){this.department=d;}
}
