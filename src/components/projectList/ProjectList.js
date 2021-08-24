import React from "react";
import { useSelector } from "react-redux";
import Project from "./components/project/Project";
import { useHistory } from "react-router-dom";

import "./projectList.scss";
import Header from "../header/Header";

const ProjectsList = () => {
  const projects = useSelector((state) => state.project);
  const history = useHistory();

  const addNewProject = () => {
    history.push("/add-project");
  };

  return (
    <section>
      <Header />
      <section className="projects">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
        <button onClick={addNewProject} className="button">
          Add New Project
        </button>
      </section>
    </section>
  );
};

export default ProjectsList;
