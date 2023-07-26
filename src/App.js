// import logo from './logo.svg';
import "./App.css";
import About from "./container/About";
import Alert from "./container/Alert";
import Navbar from "./container/Navbar";
// import Textform from "./container/TextForm";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TextForm from "./container/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const alertMessage = (message, type) => {
    setalert({ message: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(3, 10, 56";
      alertMessage("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      alertMessage("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}>
        </Route>
        <Route exact path="/" element={<TextForm
            showAlert={alertMessage}
            heading="TextUtils - Word Counter ,Character Counter"
            mode={mode}
          />}>
        </Route>
      </Routes>
    </Router> 
    </>
  );
}

export default App;
