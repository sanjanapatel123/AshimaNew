import { Routes, Route } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import MaritalStatusPage from "./components/MaritalStatusPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSection></HomeSection>}></Route>
      <Route path="/dashboard" element={<Home></Home>}></Route>
      <Route path="/about" element={<HomePage></HomePage>}></Route>
      <Route path="/blog" element={<MaritalStatusPage></MaritalStatusPage>}></Route>
    </Routes>
  );
};
export default App;
