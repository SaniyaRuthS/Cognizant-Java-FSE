
package com.cognizant.employee.dao;

import java.util.ArrayList;
import org.springframework.stereotype.Repository;
import com.cognizant.employee.model.Department;

@Repository
public class DepartmentDao {

    public static ArrayList<Department> DEPARTMENT_LIST = new ArrayList<>();

    static {
        DEPARTMENT_LIST.add(new Department(1, "IT"));
        DEPARTMENT_LIST.add(new Department(2, "HR"));
        DEPARTMENT_LIST.add(new Department(3, "Finance"));
    }

    public ArrayList<Department> getAllDepartments() {
        return DEPARTMENT_LIST;
    }
}
