import { v4 as uuidv4 } from "uuid";
import { ActionTypes } from "../constants/ActionTypes";

export const setEmployee = (employee) => {
  employee.id = uuidv4();
  return (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_EMPLOYEE,
      payload: employee,
    });
  };
};

export const setProject = (project) => {
  project.id = uuidv4();
  return (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_PROJECT,
      payload: project,
    });
  };
};

export const setManager = (managerId, projectId) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_MANAGER,
      payload: { managerId, projectId },
    });
  };
};

export const setMember = (memberId, projectId) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_MEMBER,
      payload: { memberId, projectId },
    });
  };
};
