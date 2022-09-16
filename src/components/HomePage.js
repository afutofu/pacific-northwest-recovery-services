import { useState } from "react";

import "../styles/Home.css";

import awtfLogo from "../assets/awtf-logo.png";
import aahaaLogo from "../assets/aahaa-logo.png";

const HomePage = () => {
  const [showAwtf, setShowAwtf] = useState(false);
  const [showAahaa, setShowAahaa] = useState(false);

  return (
    <section id="home">
      <a
        id="awtf-container"
        href="/awtf"
        className={
          showAwtf
            ? "container-expand"
            : showAahaa
            ? "container-shrink"
            : "container-normal"
        }
        onMouseOver={() => setShowAwtf(true)}
        onMouseLeave={() => setShowAwtf(false)}
      >
        <div className="container">
          <img id="awtf-logo" src={awtfLogo} alt="A Walk To Freedom" />
        </div>
      </a>
      <a
        id="aahaa-container"
        href="/aahaa"
        className={
          showAahaa
            ? "container-expand"
            : showAwtf
            ? "container-shrink"
            : "container-normal"
        }
        onMouseOver={() => setShowAahaa(true)}
        onMouseLeave={() => setShowAahaa(false)}
      >
        <div className="container">
          <img id="aahaa-logo" src={aahaaLogo} alt="AAHAA" />
        </div>
      </a>
    </section>
  );
};

export default HomePage;
