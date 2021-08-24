import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { setManager, setMember } from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./viewProject.scss";
import DropDown from "./components/DropDown";

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

const ViewProject = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [addProjectManager, setAddProjectManager] = React.useState(false);
  const [addProjectMember, setAddProjectMember] = React.useState(false);
  const projects = useSelector((state) => state.project);
  const employees = useSelector((state) => state.employee);
  const { id } = useParams();

  const [managerId, setManagerID] = React.useState("");
  const [memberId, setMemberID] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const project = projects.find((emp) => {
    return emp.id === id;
  });

  const manager = employees.find((emp) => {
    return emp.id === project.managerId;
  });

  const members = employees.filter((emp, index) => {
    return project.members.includes(emp.id);
  });

  const handleChange = (event) => {
    setManagerID(event.target.value);
    dispatch(setManager(event.target.value, project.id));
  };

  const handleChangeMember = (event) => {
    setMemberID(event.target.value);
    dispatch(setMember(event.target.value, project.id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const projectManagerHandler = () => {
    setAddProjectManager(true);
  };

  const projectMemberHandler = () => {
    setAddProjectMember(true);
  };
  return (
    <section>
      <Header />
      <section className="view-project">
        <section className="view-project__details">
          <img
            className="view-profile-image"
            alt="Travis Howard"
            src={project.imgURL}
          />
          <section className="view-profile__items">
            <section className="view-profile__item">
              <label>Project Id</label>
              <p>{project.id}</p>
            </section>
            <section className="view-profile__item">
              <label>Name</label>
              <p>{project.name}</p>
            </section>
            <section className="view-profile__item">
              <label>Email</label>
              <p>{project.email}</p>
            </section>
            <section className="view-profile__item">
              <label>Start Date</label>
              <p>{project.startDate}</p>
            </section>
          </section>
        </section>
        <section className="progress-bar">
          <BorderLinearProgress
            className="progress-bar__line"
            variant="determinate"
            value={project.progress}
          />
          {project.progress + "%"}
        </section>
        {project.managerId ? (
          <section className="project-manager">
            <p className="label">Project Manager</p>
            <p
              className="content"
              onClick={() => history.push("/view-profile/" + manager.id)}
            >
              {manager.name}
            </p>
          </section>
        ) : addProjectManager === false ? (
          <button onClick={projectManagerHandler} className="manager-button">
            Add Project Manager
          </button>
        ) : (
          <div>
            <DropDown
              title="Select PM"
              managerId={managerId}
              open={open}
              employees={employees}
              handleChange={handleChange}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          </div>
        )}
        <section className="members">
          {members &&
            members.map((member) => {
              return (
                <p
                  className="content"
                  onClick={() => history.push("/view-profile/" + member.id)}
                >
                  {member.name}
                </p>
              );
            })}
          {addProjectMember === false ? (
            <button onClick={projectMemberHandler} className="manager-button">
              Add Member
            </button>
          ) : (
            <div>
              <DropDown
                title="Select Member"
                memberId={memberId}
                open={open}
                employees={employees}
                handleChangeMember={handleChangeMember}
                handleClose={handleClose}
                handleOpen={handleOpen}
              />
            </div>
          )}
        </section>
      </section>
    </section>
  );
};

export default ViewProject;
