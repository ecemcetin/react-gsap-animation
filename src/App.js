import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 30,
      ease: "none",
      delay: 1,
    });
  }, []);
  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
