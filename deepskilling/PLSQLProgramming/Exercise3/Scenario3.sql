SET SERVEROUTPUT ON;
DECLARE
    v_FromAccount NUMBER := 101;
    v_ToAccount NUMBER := 102;
    v_Amount NUMBER := 5000;
    v_Balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = v_FromAccount;
    IF v_Balance >= v_Amount THEN
        UPDATE Accounts
        SET Balance = Balance - v_Amount
        WHERE AccountID = v_FromAccount;
        UPDATE Accounts
        SET Balance = Balance + v_Amount
        WHERE AccountID = v_ToAccount;
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer successful.');

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance.');
    END IF;
END;
/