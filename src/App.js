import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Report, ReportOne, ReportThree, ReportTwo } from "./pages/Report";
import Team from "./pages/Team";
import { useState } from "react";
import * as BsIcons from "react-icons/bs";

function App() {
  const [isDarkBackground, setIsDarkBackground] = useState(false); // State for dark background

  // Function to toggle the background color
  const toggleBackground = () => {
    setIsDarkBackground((prevBackground) => !prevBackground);
  };
  return (
    <div
      className={`app-container ${isDarkBackground ? "dark-background" : ""}`}
    >
      <div className="background-toggle-container">
        <button onClick={toggleBackground} className="background-toggle-button">
          <BsIcons.BsBrightnessHigh />
        </button>
        <h4 >Login / Register</h4>
      </div>

      <Router>
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/reports/reports1" element={<ReportOne />} />
          <Route path="/reports/reports2" element={<ReportTwo />} />
          <Route path="/reports/reports3" element={<ReportThree />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// const changeBackgroundButton = document.getElementById("theme-btn");

// changeBackgroundButton.addEventListener("click", () => {
//   const body = document.body;
//   const newBackgroundColor = getRandomColor(); // Generate a random color

//   body.style.backgroundColor = newBackgroundColor;
// });
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // Listen for the custom event and change the background color
// document.addEventListener("changeBackgroundEvent", () => {
//   const body = document.body;
//   const newBackgroundColor = getRandomColor();
//   body.style.backgroundColor = newBackgroundColor;
// });

// function getRandomColor() {
//   // Same getRandomColor function as before
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
