import "../styles/AAHAAPage.css";
import logo from "../assets/images/aahaa-logo.png";
import bg from "../assets/images/aahaa-home-bg.jpg";
import facebookIcon from "../assets/icons/iconmonstr-facebook-white.png";

import TestimonialSelector from "./TestimonialSelector";

const AAHAAPage = () => {
  return (
    <section id="aahaa">
      <img className="bg-image" src={bg} alt="path going through forest" />
      <header>
        <div className="icons">
          <a
            href="https://www.facebook.com/aahaasoberliving"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="facebook logo" />
          </a>
        </div>
        <img className="title" src={logo} alt="A Walk To Freedom" />
        <p>Tel: +1 (253) 246-1613</p>
      </header>
      <div className="container about">
        {/* <h3>About Us</h3> */}
        <p>
          AAHAA Supportive Housing is a community of men and women in recovery.
          Through <strong>group conscience</strong>, <strong>fellowship</strong>
          , a 12-step program, and <strong>faith</strong> - we work towards a
          common goal. A new way of life is possible, one just has to be{" "}
          <strong>willing</strong> to try something new and have a willingness
          to embrace <strong>change</strong>.
        </p>
        <a
          id="aahaa-button"
          href="https://www.aahaasupportivehousing.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full information and services here
        </a>
      </div>
      <div className="container services">
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
        </ul>
      </div>
      <div className="container team">
        <h3>Testimonials</h3>
        <TestimonialSelector />
        <div className="separator" />
        <a
          id="aahaa-button"
          href="https://www.aahaasupportivehousing.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full information and services here
        </a>
      </div>
    </section>
  );
};

export default AAHAAPage;
