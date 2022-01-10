import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@material-ui/core";
import { ClassNames } from "@emotion/react";
import Button from "@mui/material/Button";


export default function Student() {
  // States
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [errorHandle, setErrorHandle] = useState(false);
  const [successfullyAddedUserCheck, setSuccessfullyAddedUserCheck] = useState(false);

  const paperStyles = { padding: "50px 20px", width: 600, margin: "20px auto" };

  // Functions
  function handleSubmit(e) {
    e.preventDefault();
    const student = { firstName, address };

    if (!notValidEntry(student)) {
      fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        console.log("New student added!");
        
      });
      successfullyAdded();
    } else {
      setErrorHandle(true);
    }
  }

  function notValidEntry(student) {
    const name = student.firstName;
    const location = student.address;
    if ( name === "" || name === " ") {
      return false;
    } else if (location === "" || location === " ") {
      return false;
    }
    console.log(student);
  }

  function successfullyAdded() {
    setSuccessfullyAddedUserCheck(true);
    if (errorHandle) {
      setErrorHandle(false);
    }

  }

  return (
    <div>
      <Container>
        <form className={ClassNames.root} noValidate autoComplete="off">
          <Paper elevation={3} style={paperStyles}>
            <h1> Add a student! </h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />{" "}
              <TextField
                id="filled-basic"
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
              />
            </Box>{" "}
            <Button variant="contained" onClick={handleSubmit}>
              {" "}
              Submit{" "}
            </Button>
          </Paper>{" "}
        </form>{" "}
        {errorHandle ? <p>Name and address cannot be blank</p> : <p></p>}
        {successfullyAddedUserCheck ? <p>User has since been added</p> : <p></p>}
      </Container>
    </div>
  );
}
