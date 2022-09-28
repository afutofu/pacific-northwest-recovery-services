import "../styles/WalkPage.css";
import logo from "../assets/images/awtf-logo.png";
import bg from "../assets/images/awtf-page-bg.jpg";
import facebookIcon from "../assets/icons/iconmonstr-facebook.png";
import instagramIcon from "../assets/icons/iconmonstr-instagram.png";

import Banner from "./Banner";
import TeamSelector from "./TeamSelector";

const WalkPage = () => {
  return (
    <section id="awtf">
      <img className="bg-image" src={bg} alt="path going through forest" />
      <Banner>
        <p>
          <strong>January 1st</strong> - Our brand new PHP home for those who
          are in need of more structured environment.
        </p>
      </Banner>
      <header>
        <a href="/" className="back-button">
          Back
        </a>
        <div className="icons">
          <a
            href="https://facebook.com/AWalkToFreedomCounseling"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="facebook logo" />
          </a>
          <a
            href="https://instagram.com/AwalkTo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="instagram logo" />
          </a>
        </div>
        <img className="title" src={logo} alt="A Walk To Freedom" />
        <p className="phone-number">Tel: +1 (253) 939-2211</p>
      </header>
      <div className="container about">
        {/* <h3>About Us</h3> */}
        <p>
          By January 1st our brand new PHP home for those who are in need of
          more structured environment
        </p>
        <a
          id="awtf-button"
          href="https://awalktofreedom.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full information and services here
        </a>
      </div>
      <div className="container services">
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
        </ul>
      </div>
      <div className="container team">
        <h3>Meet Our Team</h3>
        <TeamSelector />
        <div className="separator" />
        <a
          id="awtf-button"
          href="https://awalktofreedom.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full information and services here
        </a>
      </div>
    </section>
  );
};

export default WalkPage;
