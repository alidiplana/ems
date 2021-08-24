import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./viewProfile.scss";
import Header from "../header/Header";
import AttendanceList from "../attendanceList/AttendanceList";

const ViewProfile = () => {
  const employees = useSelector((state) => state.employee);
  const { id } = useParams();
  const employee = employees.find((emp) => {
    return emp.id === id;
  });

  return (
    <section>
      <Header />
      <section className="view-profile">
        <section className="view-profile__details">
          <img
            className="view-profile-image"
            alt="Travis Howard"
            src={employee.imgURL}
          />
          <section className="view-profile__items">
            <section className="view-profile__item">
              <label>Employee Id</label>
              <p>{employee.id}</p>
            </section>
            <div className="view-profile__item">
              <label>Name</label>
              <p>{employee.name}</p>
            </div>
            <div className="view-profile__item">
              <label>Email</label>
              <p>{employee.email}</p>
            </div>
            <div className="view-profile__item">
              <label>Date of Join</label>
              <p>{employee.doj}</p>
            </div>
            <div className="view-profile__item">
              <label>Designation</label>
              <p>{employee.designation}</p>
            </div>
          </section>
        </section>
        <AttendanceList />
      </section>
    </section>
  );
};

export default ViewProfile;
