import "./App.css";
import HeaderBar from "./components/HeaderBar.jsx";
import AddStudent from "./Pages/AddStudent";
import DisplayStudents from "./components/DisplayStudents";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";
import SideBar from "./components/SideBar.jsx"
import BootStrapHeader from "./components/BootStrapHeader.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App" style={{overflow: "visible"}}>
      {/* <HeaderBar /> */}
      <BootStrapHeader />
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/ViewAllStudents" element={<DisplayStudents />} />
      </Routes>
    </div>
  );
}

export default App;
