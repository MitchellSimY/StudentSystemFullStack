import * as React from "react";
import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

export default function HeaderBar() {
  // states
  const [students, setStudents] = useState([]);

  // Constants
  const paperStyles = {
    overflowY: "scroll",
    padding: "50px 20px",
    width: 600,
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

  return (
    <div>
      <Paper elevation={3} style={paperStyles}>
      <table style={{padding: "15px"}}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
        {students.map((student) => (
            <tr>
                <td style={{padding: "50px"}}>{student.id}</td>
                <td style={{padding: "50px"}}>{student.firstName}</td>
                <td style={{padding: "50px"}}>{student.address}</td>
                <td style={{padding: "50px"}}> Delete? </td>
            </tr>
          
        ))}
        </table>
      </Paper>
    </div>
  );
}
