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
          <main>
            <Home/>
          </main>
        </div>
      </div>
      <div class="page2">
        <LangNTool/>
      </div>
      <div class="socials">
        <div class="1" style={{marginLeft:"1em"}}><a href="https://github.com/A-Lokanush">Github</a></div>
        <div class="2" style={{marginLeft:"1em"}}><a href="https://linkedin.com/in/lokanushananthan/">LinkedIn</a></div>
        <div class="3" style={{marginLeft:"1em"}}><a href="https://www.instagram.com/___la23.___/">Instagram</a></div>
      </div>
    </div>
  );
}

export default App;
