import "./App.css";

function App() {
  const exp = "<!-- Web Developer & Tech Enthusiast -->";
  return (
    <div className="App">
      {/* <div className="header">Lokanush Ananthan</div>
      <div className="subText">{exp}</div>
      <div className="content">
        <span style={{ color: "cyan", fontSize: "1.1em" }}># brief-intro</span>
        <br />
        Hola, I am Lokanush , a sophomore at National Institute of
        Technology,Tiruchirappalli. Currently I am pursuing Computer Science and
        Engineering and I am really passionate about web development.
        <br />
        <div className="buttons">
          <button id="prj">My Projects</button>
          <button id="about-me">More About Me</button>
          <button id="cv">Download my CV</button>
        </div>
      </div> */}
      
      <div className="header">Lokanush Ananthan</div>
      <div className="subText">{exp}</div>
      <div class="codebox">
        <header>
          <span id="a"></span>
          <span id="b"></span>
          <span id="c"></span>
        </header>
        <main>
        <br />
        <span style={{ color: "cyan", fontSize: "1.2em" }}># brief-intro</span>
        <br />
        <br />
        Hola, I am Lokanush , sophomore at National Institute of
        Technology,Tiruchirappalli. Currently I am pursuing Computer Science and
        Engineering and I am really passionate about web development.
        <br />
        <div className="buttons">
          <button id="prj">My Projects</button>
          <button id="about-me">Languages and Tools</button>
          <button id="cv">Download my CV</button>
        </div>  
        </main>
      </div>
    </div>
  );
}

export default App;
