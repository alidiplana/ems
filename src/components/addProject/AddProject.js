import React from "react";
import { Formik, Form, Field } from "formik";
import { setProject } from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { TextField } from "formik-material-ui";
import Header from "../header/Header";
import { Button } from "@material-ui/core";
import "./addProject.scss";

const AddProject = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <section className="add-project">
      <Header />
      <Formik
        initialValues={{
          name: "",
          email: "",
          imgURL: "",
          startDate: "",
          progress: "",
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

          if (!values.startDate) {
            errors.startDate = "Please Enter Start Date";
          }

          if (!values.progress) {
            errors.progress = "Please Enter Project Progress";
          }

          return errors;
        }}
        onSubmit={(values) => {
          dispatch(setProject(values));
          history.push("/projects-list");
        }}
      >
        <section className="add">
          <Form className="add-project_form">
            <section className="add-project__item">
              <label htmlFor="name">Name</label>
              <Field
                component={TextField}
                name="name"
                type="text"
              />
            </section>

            <section className="add-project__item">
              <label htmlFor="email">Email Address</label>
              <Field
                component={TextField}
                name="email"
                type="email"
              />
            </section>

            <section className="add-project__item">
              <label htmlFor="imgURL">Img URL</label>
              <Field
                component={TextField}
                name="imgURL"
                type="text"
              />
            </section>

            <section className="add-project__item">
              <label htmlFor="startDate">Start Date</label>
              <Field
                component={TextField}
                name="startDate"
                type="date"
              />
            </section>

            <section className="add-project__item">
              <label htmlFor="progress">Progress</label>
              <Field
                component={TextField}
                name="progress"
                type="text"
              />
            </section>

            <Button type="submit">Add Project</Button>
          </Form>
        </section>
      </Formik>
    </section>
  );
};

export default AddProject;
