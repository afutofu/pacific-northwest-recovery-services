import "../styles/WalkPage.css";
import logo from "../assets/images/awtf-logo.png";
import bg from "../assets/images/awtf-page-bg.jpg";
import facebookIcon from "../assets/icons/iconmonstr-facebook.png";
import instagramIcon from "../assets/icons/iconmonstr-instagram.png";

import Banner from "./Banner";
import TeamSelector from "./TeamSelector";

import staff1 from "../assets/images/awtf-staff-1.jpg";
import staff2 from "../assets/images/awtf-staff-2.jpg";
import staff3 from "../assets/images/awtf-staff-3.jpg";

const team = [
  {
    name: "Lynn Dalsing",
    title: "Executive Director, Billing Coordinator",
    pic: staff1,
    desc: "Ms. Dalsing has worked in Behavioral Health since 2015 until current and has been in Medical Billing in Washington state from 1992 to currently. Ms. Dalsing has a Bachelors in Business Management with expertise in Medical Billing, HIPPA Compliance and WAC Requirements. Ms. Dalsing opened A Walk To Freedom Counseling with the main purpose of helping individuals find peace and happiness when battling Substance Use Disorder and/or Mental Health issues.",
  },
  {
    name: `Ryan "Allyson" Noel`,
    title: "Substance Use Disorder Supervisor",
    pic: staff2,
    desc: "Allyson Noel brings peace and calmness to our office, she has been in the addiction field since 2013, she loves serving the clients and seeing there lives transform. She has been in recovery herself since 2011.",
  },
  {
    name: "Michael Preston",
    title: "Substance Use Disorder Professional Trainee, Coordinator, Owner",
    pic: staff3,
    desc: "Mr. Preston has been working in the behavioral Health for 6 years. He not only teaches but practices Mindfulness himself while on his own recovery journey. He is a Certified Peer Support as well as a Substance Use Disorder Professional Trainee. He has work as a manager in recovery homes and has worked with parents of addicts to help unite families. Mr. Preston’s goal is to help show people that are struggling recovery is possible and there is a way out of pain and suffering.",
  },
];

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
          We help support the health, well-being and healing of individuals and
          families by making a difference in the lives of the people we interact
          with each day. If you’re interested in becoming <strong>clean</strong>{" "}
          and <strong>sober</strong>, <strong>happier</strong>, and find some{" "}
          <strong>peace</strong>, get started and please get in contact today!
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
          <li>Mental Health Counselling</li>
        </ul>
      </div>
      <div className="container team">
        <h3>Meet Our Team</h3>
        <TeamSelector team={team} />
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
