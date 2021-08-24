import React from "react";
import { useSelector } from "react-redux";
import Employee from "./components/employee/Employee";
import { useHistory } from "react-router-dom";

import "./employeesList.scss";
import Header from "../header/Header";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employee);
  const history = useHistory();

  const addNewEmployee = () => {
    history.push("/add-employee");
  };

  return (
    <section>
      <Header />
      <section className="employees">
        <section className="employees_items">
          {employees.map((employee) => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </section>
        <button onClick={addNewEmployee} className="button">
          Add New Employee
        </button>
      </section>
    </section>
  );
};

export default EmployeesList;
