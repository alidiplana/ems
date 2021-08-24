import './attendanceList.scss';

const AttendanceList = () => {
  let attendance = [];
  for (let i = 0; i < 30; i++) {
    attendance[i] = Math.floor(Math.random() * 10) < 9 ? "P" : "A";
  }

  return (
    <div>
      <p>Attendance list of last 30 days</p>
      <section>
        {attendance.map((element, index) =>
          Math.floor(Math.random() * 10) < 9 ? "P " : "A "
        )}
      </section>
    </div>
  );
};

export default AttendanceList;
