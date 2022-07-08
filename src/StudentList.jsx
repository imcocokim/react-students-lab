import Student from "./Student";

const StudentList = ({students}) => {
  return ( 
    <>
      <h1>Student List</h1>
        {students.map(student => 
          <div className="student-details">
            <Student student={student} key="student"/>
          </div>
          )}
    </>
  );
}

export default StudentList;