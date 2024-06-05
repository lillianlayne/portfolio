import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import AboutScreen from "./pages/AboutScreen";
import SelectedScreen from "./pages/SelectedScreen";
import CastStudeisScreen from "./pages/CastStudyScreen";
import ProjectTemplate from "./pages/ProjectTemplate";
import projects from "./data/projects";
import UnderConstruction from "./pages/UnderConstruction";
import ScrollTop from "./components/ScrollTop";



function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(projects);
  const [position, setPosition] = useState(window.scrollY)
  const [scrolling, setScrolling] = useState(true)


    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const handleNav = (e) => {
      const currPos = window.scrollY;
      if (position < currPos) {
        setScrolling(false)
      } else {
        setScrolling(true)
      }
      setPosition(currPos)
    }

    useEffect(() => {
      window.addEventListener('scroll', handleNav)
      
      return () => {
        window.removeEventListener('scroll', handleNav)
        
      }
    }, [position])

  return (
    <div className="App bg-stone-900 text-stone-100 mx-auto flex flex-col h-full">
      <Nav scrolling={scrolling} />
      <main>
          <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeScreen projects={data} />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/selectedworks" element={<SelectedScreen />} />
          <Route path="/casestudies" element={<CastStudeisScreen />} />
          <Route path="/project/:id" element={<ProjectTemplate />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
        </Routes>
      </main>
    
    </div>
  );
}

export default App;
