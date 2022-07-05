import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Enabled dark mode", "success");
      document.title = "TextUtil-Darkmode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled light mode", "success");
      document.title = "TextUtil-Lightmode"
    }
  };

  const showAlert = (message, type) => {
    console.log("show alert clicked");
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          barTitle="Text Utiles 1"
          item1="Home"
          item2="About"
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route
            exact path="/home"
            element={
              <div className="mb-2">
                <TextForm
                  header1="Enter your text here below:"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
