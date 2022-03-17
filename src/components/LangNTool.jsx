import React from "react";
import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { DiMongodb, DiHtml5,DiCss3,DiJsBadge,DiReact,DiNodejsSmall,DiMysql,DiPostgresql,DiPhp,DiRust,DiGit,DiDart,DiUbuntu,DiVisualstudio } from "react-icons/di";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const LangNTool = () => {

  const { height, width } = useWindowDimensions();  

  const settings = {
    class: "center",
    arrows:false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    centerPadding: "20px",
    topPadding: "20px",
    slidesToShow: 2,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div class="page2">
      <div class="header2">Languages, Frameworks & Tools</div>
      <div className="container">
        
          {width > 1000 ? (
            <div class="codebox2">
            <header id="h2">
              <span id="a"></span>
              <span id="b"></span>
              <span id="c"></span>
            </header>
            <main class="lang">
              <span style={{ color: "rgb(255, 102, 0)", fontSize: "1.3em" }}>
                # More About Me
              </span>
              <br />
              I am proficient in HTML, CSS, JavaScript, TypeScript and Node.
              Yeah, I do have worked on the front-end frameworks like ReactJs
              and ExpressJs for back-end, also worked with a full stack
              framework, NextJs (personal favourite). Used MySQL, MongoDB and
              PostgreSQL for DBs. Tools I use are git(VCS), VS Code(text
              editor), Linux(OS) and Postman(Route/API testing).
              <br />
              But, I do have interest in App Developement(learning) predominanty
              in  DSA and CPs mostly using C/C++.
            </main>
            </div>
          ) : (
            null
          )}
        <div className="slider">
          <div class="slider1" style={{ alignItems: "center" }}>
            <Slider {...settings}>
              <div class="slid"><DiHtml5/>HTML5</div>
              <div class="slid"><DiCss3/> CSS3</div>
              <div class="slid"><DiJsBadge/> JavaScript</div>
              <div class="slid"><DiReact/> React</div>
              <div class="slid"><DiNodejsSmall/> NodeJS</div>
              <div class="slid"><DiMysql/> MySQL</div>
              <div class="slid"><DiMongodb />MongoDB</div>
            </Slider>
          </div>
          <div class="slider2" style={{ alignItems: "center" }}>
            <Slider {...settings}>
              <div class="slid"><DiPostgresql/> Postgresql</div>
              <div class="slid"><DiPhp/> PHP</div>
              <div class="slid"><DiRust/> Rust</div>
              <div class="slid"><DiGit/> Git</div>
              <div class="slid"><DiDart/> Dart</div>
              <div class="slid"><DiUbuntu/> Ubuntu</div>
              <div class="slid"><DiVisualstudio/> Visual Studio</div>
            </Slider>
          </div>
        </div>
      </div>

      <Link to="/github-stats">
      <div class="githubStats-Link">
        If you are interested, check my <button id="cv2">github stats</button> 
      </div>
      </Link>

      <div class="socials">
        <div
          class="github"
          style={{
            marginLeft: "0.5em",
            marginRight: "0.5em",
            fontSize: "1.75em",
          }}
        >
          <a href="https://github.com/A-Lokanush" target="_blank">
            <FaGithub />
            <div className="small">Github</div>
          </a>
        </div>
        <div
          class="linkedin"
          style={{
            marginLeft: "0.5em",
            marginRight: "0.5em",
            fontSize: "1.75em",
          }}
        >
          <a href="https://linkedin.com/in/lokanushananthan/" target="_blank">
            <FaLinkedinIn /> <div className="small"> LinkedIn</div>
          </a>
        </div>
        <div
          class="insta"
          style={{
            marginLeft: "0.5em",
            marginRight: "0.5em",
            fontSize: "1.75em",
          }}
        >
          <a href="https://www.instagram.com/___la23.___/" target="_blank">
            <FaInstagram /> <div className="small">Instagram</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LangNTool;

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

