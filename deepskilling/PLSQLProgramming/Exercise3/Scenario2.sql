SET SERVEROUTPUT ON;
DECLARE
    v_Department Employees.Department%TYPE := 'IT';
    v_Bonus NUMBER := 10;
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * v_Bonus / 100)
    WHERE Department = v_Department;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Employee bonus updated successfully.');
END;
/