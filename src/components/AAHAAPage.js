import "../styles/AAHAAPage.css";
import logo from "../assets/aahaa-logo.png";

const AAHAAPage = () => {
  return (
    <section id="aahaa">
      <navbar>
        <img src={logo} alt="AAHAA" />
      </navbar>
      <div className="container">
        <h3>About Us</h3>
        <p>
          AAHAA Supportive Housing is a community of men and women in recovery.
          Through group conscience, fellowship, a 12-step program, and faith -
          we work towards a common goal.
        </p>
      </div>
      <div className="container">
        <h3>Services We Provide</h3>
        <p>Individual Counseling Services</p>
        <p>Life Skills Training & Seminars</p>
        <p>Case Management</p>
        <p>Food</p>
        <p>Utilities</p>
        <p>Local & Long Distance Telephone</p>
        <p>Internet Access</p>
        <p>Laundry</p>
        <p>Furnishings (including bed & dressers)</p>
        <p>Linen and Bath</p>
        <p>Easy Access to Public Transportation</p>
      </div>

      <a
        id="aahaa-button"
        href="https://www.aahaasupportivehousing.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Full information and services here
      </a>
    </section>
  );
};

export default AAHAAPage;
