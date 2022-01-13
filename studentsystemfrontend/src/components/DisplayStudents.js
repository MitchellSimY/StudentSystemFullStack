import * as React from "react";
import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import DeleteStudentPopup from "../components/DeleteStudentPopup.jsx";


export default function HeaderBar() {
  // states
  const [students, setStudents] = useState([]);

  // Constants
  const paperStyles = {
    overflowY: "scroll",
    padding: "50px 20px",
    width: 775,
    margin: "20px auto",
    overflow: "visible",
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAllStudents")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  });

  // Functions
  function handleDelete(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("keyid"));

    var targetId = e.target.getAttribute("keyid");

    fetch(`http://localhost:8080/student/deleteStudent/${targetId}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Student deleted!");
    });
  }

  return (
    <div>
      {/* <DeleteStudentPopup /> */}
      <Paper elevation={10} style={paperStyles}>
        
        <table style={{ padding: "50px", overflow: "visible" }}>
          <tr>
            <th style={{ paddingLeft: "25px" ,paddingRight: "25px" }}>ID</th>
            <th style={{ paddingLeft: "25px" ,paddingRight: "25px" }}>Name</th>
            <th style={{ paddingLeft: "25px" ,paddingRight: "25px" }}>Address</th>
            <th style={{ paddingLeft: "25px" ,paddingRight: "25px" }}>Options</th>
          </tr>
          {students.map((student) => (
            <tr>
              <td style={{ padding: "50px" }}>{student.id}</td>
              <td style={{ padding: "50px" }}>{student.firstName} {student.lastName}</td>
              <td style={{ padding: "50px" }}>{student.address}</td>
              <td style={{ padding: "50px" }}>
              <button type="button" class="btn btn-danger" onClick={handleDelete} keyid={student.id}>Delete</button> {" "}
              <button type="button" class="btn btn-primary">Update</button>
              </td>
            </tr>

          ))}
        </table>
      </Paper>
    </div>
  );
}
