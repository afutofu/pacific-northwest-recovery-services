import { useState } from "react";

import "../styles/Home.css";

import awtfLogo from "../assets/images/awtf-logo.png";
import aahaaLogo from "../assets/images/aahaa-logo.png";

import awtfBg from "../assets/images/awtf-home-bg.jpg";
import aahaaBg from "../assets/images/aahaa-home-bg.jpg";

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
        <img
          src={awtfBg}
          alt="bridge going into forest"
          className="background-image"
        />
        <div className="container">
          <img id="awtf-logo" src={awtfLogo} alt="A Walk To Freedom" />
          <h2 className={`content ${showAwtf ? "visible" : "invisible"}`}>
            "The Road to Healing Begins Here"
          </h2>
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
        <img
          src={aahaaBg}
          alt="person opening up to sunlight"
          className="background-image"
        />
        <img id="aahaa-logo" src={aahaaLogo} alt="AAHAA" />
        <div className="container">
          <h2 className={`content ${showAahaa ? "visible" : "invisible"}`}>
            "A new way of life is possible, one just has to be willing to try
            something new and have a willingness to embrace change"
          </h2>
        </div>
      </a>
    </section>
  );
};

export default HomePage;
