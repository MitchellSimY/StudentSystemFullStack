import * as React from "react";
import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import DeleteStudentPopup from "../components/DeleteStudentPopup.jsx";


export default function HeaderBar() {
  // states
  const [students, setStudents] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [targetId, setTargetId] = useState("");

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
    var key = e.target.getAttribute("keyid");
    if (!deletePopup) {
      setDeletePopup(true);
      setTargetId(key)
    } 

  }

  return (
    <div>
      {deletePopup ? <DeleteStudentPopup targetId={targetId} setDeletePopup={setDeletePopup}/> : null}
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
              <td style={{ padding: "25px" }}>{student.firstName} {student.lastName}</td>
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
