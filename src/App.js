import { Route, Switch, Redirect } from "react-router-dom";
import AddEmployee from "./components/addEmployee/AddEmployee";
import AddProject from "./components/addProject/AddProject";

import EmployeesList from "./components/employeesList/EmployeesList";
import Home from "./components/home/Home";
import ProjectsList from "./components/projectList/ProjectList";
import ViewProfile from "./components/viewProfile/ViewProfile";
import ViewProject from "./components/viewProject/ViewProject";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/employees-list">
          <EmployeesList />
        </Route>
        <Route path="/view-profile/:id">
          <ViewProfile />
        </Route>
        <Route path="/add-employee">
          <AddEmployee />
        </Route>
        <Route path="/add-project">
          <AddProject />
        </Route>
        <Route path="/projects-list">
          <ProjectsList />
        </Route>
        <Route path="/view-project/:id">
          <ViewProject />
        </Route>
        <Route path="/add-project">
          <AddProject />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
