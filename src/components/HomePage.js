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
      <div className="home-banner">
        <div className="content">
          <h2>Pacific Northwest Recovery Services</h2>
          <p>
            After decades of living in this space and finding spaces to heal, A
            Walk To Freedom and AAHAA have decided to come together in order to
            provide all these comprehensive wrap-around services for{" "}
            <strong>healing</strong> and <strong>growth</strong> for the men and
            women who are looking for <strong>real change</strong>.
          </p>
        </div>
      </div>
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
          alt="bridge going into forest, a walk into the unknown is the first step into freedom"
          className="background-image"
        />
        {/* <div className="container"> */}
        <img id="awtf-logo" src={awtfLogo} alt="A Walk To Freedom" />
        <div className={`content  ${showAwtf ? "visible" : "invisible"}`}>
          {/* <h3 className="quote">"The Road to Healing Begins Here"</h3> */}
          <div className="services">
            <h3>Services We Provide</h3>
            <ul>
              <li>Intensive Outpatient</li>
              <li>Relapse Prevention</li>
              <li>Outpatient</li>
              <li>Alcohol, Drug information School</li>
              <li>Aftercare</li>
              <li>Consumer Awareness</li>
              <li>Deferred Prosecution</li>
              <li>Family Law Assessments</li>
              <li>Drug and Alcohol Assessments</li>
              <li>Housing Referrals</li>
              <li>Employment Referrals</li>
              <li>Peer Support</li>
              <li>Crisis Help</li>
              <li>DUI Assessments</li>
              <li>Mental Health Counselling</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
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
          alt="person opening up to sunlight and embracing change. letting go of their previous problems and opening up to other people."
          className="background-image"
        />
        <img id="aahaa-logo" src={aahaaLogo} alt="AAHAA" />
        {/* <div className="container"> */}
        <div className={`content  ${showAahaa ? "visible" : "invisible"}`}>
          {/* <h3 className="quote">
            “A new way of life is possible, one just has to be willing to try
            something new and have a willingness to embrace change.”
          </h3> */}
          <div className="services">
            <h3>Services We Provide</h3>
            <ul>
              <li>Individual Counseling Services</li>
              <li>Life Skills Training & Seminars</li>
              <li>Case Management</li>
              <li>Food</li>
              <li>Utilities</li>
              <li>Local & Long Distance Telephone</li>
              <li>Internet Access</li>
              <li>Laundry</li>
              <li>Furnishings (including bed & dressers)</li>
              <li>Linen and Bath</li>
              <li>Easy Access to Public Transportation</li>
              <li>Therapeutic Classes</li>
              <li>Work Readiness Programs</li>
              <li>Structured and Supportive Clean and Sober Environment</li>
            </ul>
          </div>
          <h3 className="quote">"Compassion with accountability"</h3>
        </div>
        {/* </div> */}
      </a>
    </section>
  );
};

export default HomePage;
