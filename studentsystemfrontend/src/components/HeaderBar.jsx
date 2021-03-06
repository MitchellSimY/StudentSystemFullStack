import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";
import { useState } from "react";


export default function HeaderBar() {

  const [showSideBar, setShowSideBar] = useState(false);

  function viewAddStudents(e) {
    e.preventDefault();
    window.location = "../addStudent"
  }

  function viewAllStudents(e) {
    e.preventDefault();
    console.log("Viewing all students");
    window.location = "../ViewAllStudents";
  }

  function viewHome(e) {
    e.preventDefault();
    window.location = "../";
  }

  function menuOnClick() {
    if (showSideBar) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  }

  return (
    <div>
      {showSideBar ? <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/> : "" }
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={menuOnClick}
            >
              <MenuIcon />
            </IconButton>

            <Button style={{ color: "black" }} onClick={viewHome}>
              Home
            </Button>{" "}
            |
            <Button style={{ color: "black" }} onClick={viewAllStudents}>
              View All Students
            </Button>{" "}
            |
            <Button style={{ color: "black" }} onClick={viewAddStudents}>
              Add Students
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Student Services
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
