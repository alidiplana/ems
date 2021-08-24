import { ActionTypes } from "../constants/ActionTypes";

const employees = [
  {
    id: "1",
    name: "Ali",
    imgURL: "https://material-ui.com/static/images/avatar/2.jpg",
    email: "ali@emumba.com",
    doj: "2 July, 2021",
    designation: "Software Engineer"
  },
  {
    id: "2",
    name: "Ahmad",
    imgURL: "https://material-ui.com/static/images/avatar/2.jpg",
    email: "ahmad@emumba.com",
    doj: "3 July, 2021",
    designation: "Designer"
  },
  {
    id: "3",
    name: "Asim",
    imgURL: "https://material-ui.com/static/images/avatar/2.jpg",
    email: "ali@emumba.com",
    doj: "2 July, 2021",
    designation: "Sr. Software Engineer"
  },
  {
    id: "4",
    name: "Ahsan",
    imgURL: "https://material-ui.com/static/images/avatar/2.jpg",
    email: "ahmad@emumba.com",
    doj: "3 July, 2021",
    designation: "Project Manager"
  },
];

const employeesReducer = (state = employees, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EMPLOYEE:
      const tempemployees = [...state, action.payload];
      return tempemployees;
    default:
      return state;
  }
};

export default employeesReducer;
