import "./App.css";
import Home from "./components/Home";
import LangNTool from "./components/LangNTool";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import { FaInstagram,FaLinkedinIn,FaGithub,FaRegEnvelope  } from '@react-icons/all-files/fa';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const exp = "<!-- Web Developer & Tech Enthusiast -->";
  return (
    <div class="App">
      <div class="page">
        <div class="header">Lokanush Ananthan </div>
        <div class="subText">{exp}</div>
        <div class="codebox">
          <header id="h1">
            <span id="a"></span>
            <span id="b"></span>
            <span id="c"></span>
          </header>
          <main class="home">
            <Home/>
          </main>
        </div>
      </div>
      <div class="page2">
        <LangNTool/>
      </div>
    </div>
  );
}

export default App;
