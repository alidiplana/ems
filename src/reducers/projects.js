import { ActionTypes } from "../constants/ActionTypes";

const projects = [
  {
    id: "1",
    name: "BC TECH",
    imgURL:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162609/1332.png",
    email: "info@bctech.com",
    startDate: "2 July, 2021",
    progress: 55,
    managerId: "",
    members: [],
  },
  {
    id: "2",
    name: "Taipei Tech",
    imgURL:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162622/1628.png",
    email: "infor@taipeitech.com",
    startDate: "3 July, 2021",
    progress: 90,
    managerId: "",
    members: [],
  },
  {
    id: "3",
    name: "StitchRite",
    imgURL:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162605/1236.png",
    email: "ahmad@emumba.com",
    startDate: "3 July, 2021",
    progress: 10,
    managerId: "",
    members: [],
  },
];

const ProjectReducer = (state = projects, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
      const tempProjects = [...state, action.payload];
      return tempProjects;
    case ActionTypes.ADD_MANAGER:
      const projectId = action.payload.projectId;
      const managerId = action.payload.managerId;
      for (let i = 0; i < state.length; i++) {
        if (projectId === state[i].id) {
          state[i].managerId = managerId;
        }
      }

      return state;
    case ActionTypes.ADD_MEMBER:
      const tempProjectId = action.payload.projectId;
      const memberId = action.payload.memberId;
      for (let i = 0; i < state.length; i++) {
        if (tempProjectId === state[i].id) {
          state[i].members.push(memberId);
        }
      }
      return state;
    default:
      return state;
  }
};

export default ProjectReducer;
