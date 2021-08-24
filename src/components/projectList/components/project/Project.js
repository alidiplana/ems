import React from "react";
import { useHistory } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./project.scss";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const Project = ({ project }) => {
  const history = useHistory();

  const routeHandler = () => {
    history.push("/view-project/" + project.id);
  };
  return (
    <div className="project" onClick={routeHandler}>
      <section className="table">
        <Avatar alt="Travis Howard" src={project.imgURL} />
        <p className="name">{project.name}</p>
        <p>{project.email}</p>
        <p>{project.startDate}</p>
      </section>
      <BorderLinearProgress variant="determinate" value={project.progress} />
    </div>
  );
};

export default Project;
