import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllCourses from "./components/AllCourses";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";

function App() {
  const location = useLocation();

  return (
    <div className="box">
      <div className="">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
