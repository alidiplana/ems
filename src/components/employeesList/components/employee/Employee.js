import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./employee.scss";
import { useHistory } from "react-router-dom";

const Employee = ({ employee }) => {
  const history = useHistory();

  const routeHandler = () => {
    history.push("/view-profile/" + employee.id);
  };
  return (
    <div className="employee" onClick={routeHandler}>
      <Avatar alt="Travis Howard" src={employee.imgURL} />
      <p className="name">{employee.name}</p>
      <p className="email">{employee.email}</p>
      <p className="doj">{employee.doj}</p>
      <p className="designation">{employee.designation}</p>
    </div>
  );
};

export default Employee;
