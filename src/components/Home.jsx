import React from "react";
import "./../styles/HomeStyles.css";
import LangNTool from "./LangNTool";
import { useState, useEffect } from "react";

const Home = () => {

const { height, width } = useWindowDimensions();  

const TypeWriter = ({ content = "", speed = 1000 }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent((displayedContent)=>displayedContent + content[index]) 
  }, [index])
  if(width > 1000){
    return <pre class="type-writer">{displayedContent}</pre>;
  } else {
    return <div class="type-writer">{displayedContent}</div>;
  }
  
};

const content_web = 
`- Hóla, I am Lokanush from Chennai, India
- Sophomore at National Institute of Technology, Trichirappalli studying Computer Science and Engineering
- Web Developer at Delta Force
- I'm currently learning Data Structures & Algorithms
- Looking to collaborate on OpenSource Projects
- Download my Resume to know my full details
- To reach me just drop a message on my socials listed below`;
const content_mobile = 
`Hóla, I am Lokanush from Chennai, India. Sophomore at National Institute of Technology, Trichirappalli studying Computer Science and Engineering. Web Developer at Delta Force. I'm currently learning Data Structures & Algorithms. Looking to collaborate on OpenSource Projects. Download my Resume to know my full details.To reach me just drop a message on my socials listed below`;
  const exp = "<!-- Web Developer & Tech Enthusiast -->";
  return (
    <>
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
          <span style={{ color: "cyan", fontSize: "1.3em" }}># About Me</span>
      <br />
      {/* */}
      <div class="writeBox">
        { width > 1000 ? (<TypeWriter content={content_web} speed={60} />):(<div>{content_mobile}</div>)}
        </div>
            <div class="buttons">
              <button id="cv">Download Resume</button>
            </div>
          </main>
        </div>
      </div>
      <LangNTool />
    </>
  );
};

export default Home;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
