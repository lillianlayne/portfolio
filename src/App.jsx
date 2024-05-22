import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import LoginScreen from "./pages/LoginScreen";
import AdminScreen from "./pages/AdminScreen";
import { CheckSession } from "./services/auth";
import AboutScreen from "./pages/AboutScreen";
import SelectedScreen from "./pages/SelectedScreen";
import CastStudeisScreen from "./pages/CastStudeisScreen";
import ProjectTemplate from "./pages/ProjectTemplate";
import projects from "./data/projects";

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(projects);

  return (
    <div className="App bg-stone-900 text-stone-100">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen projects={data} />} />
          {/* <Route path='/login' element={<LoginScreen setUser={setUser} />}/> */}
          {/* <Route path='/admin' element={<AdminScreen />}/> */}
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/selectedworks" element={<SelectedScreen />} />
          <Route path="/casestudies" element={<CastStudeisScreen />} />
          <Route path="/project/:id" element={<ProjectTemplate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
