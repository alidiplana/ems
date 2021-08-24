import React from "react";
import { Field, Form, Formik } from "formik";
import { setEmployee } from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../header/Header";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import "./addEmployee.scss";

const AddEmployee = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <section className="add-employee">
      <Header />

      <Formik
        initialValues={{
          name: "",
          doj: "",
          email: "",
          imgURL: "",
          designation: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Please Enter Your Name";
          } else if (!/^[a-z ,.'-]+$/i.test(values.name)) {
            errors.name = "Invalid Name";
          }

          if (!values.email) {
            errors.email = "Please Enter Your Email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.imgURL) {
            errors.imgURL = "Please Enter img URL";
          } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.imgURL)) {
            errors.imgURL = "Invalid URL";
          }

          if (!values.doj) {
            errors.doj = "Please Enter Start Date";
          }

          if (!values.designation) {
            errors.designation = "Enter Designation";
          } else if (!/^[a-z ,.'-]+$/i.test(values.name)) {
            errors.name = "Invalid Name";
          }

          return errors;
        }}
        onSubmit={(values) => {
          dispatch(setEmployee(values));
          history.push("/employees-list");
        }}
      >
        <section className="add">
          <Form className="add-employee_form">
            <section className="add-employee__item">
              <label htmlFor="name">Name</label>
              <Field
                component={TextField}
                name="name"
                type="text"
              />
            </section>

            <section className="add-employee__item">
              <label htmlFor="email">Email Address</label>
              <Field
                component={TextField}
                name="email"
                type="email"
              />
            </section>

            <section className="add-employee__item">
              <label htmlFor="designation">Designation</label>
              <Field
                component={TextField}
                name="designation"
                type="text"
              />
            </section>

            <section className="add-employee__item">
              <label htmlFor="doj">Date of Join</label>
              <Field
                component={TextField}
                name="doj"
                type="date"
              />
            </section>

            <section className="add-employee__item">
              <label htmlFor="imgURL">Image URL</label>
              <Field
                component={TextField}
                name="imgURL"
                type="text"
              />
            </section>

            <Button className="add-employee" type="submit">
              Add Employee
            </Button>
          </Form>
        </section>
      </Formik>
    </section>
  );
};

export default AddEmployee;
