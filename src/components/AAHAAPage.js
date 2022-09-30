import "../styles/AAHAAPage.css";
import logo from "../assets/images/aahaa-logo.png";
import bg from "../assets/images/aahaa-home-bg.jpg";
import facebookIcon from "../assets/icons/iconmonstr-facebook-white.png";

import Banner from "./Banner";
import TestimonialSelector from "./TestimonialSelector";
import TeamSelector from "./TeamSelector";

import staff1 from "../assets/images/aahaa-staff-1.jpeg";
import staff2 from "../assets/images/aahaa-staff-2.jpeg";
import staff3 from "../assets/images/aahaa-staff-3.jpeg";
import staff4 from "../assets/images/aahaa-staff-4.jpeg";

const team = [
  {
    name: "Mark Hampton",
    title: "Executive Director",
    pic: staff1,
    desc: 'Our Director of AAHAA has been working in this field for 15 years! Mark has worked with literally hundreds of men and women to assist in restoring their lives. Promoting healing and growth through his foundational premise "Compassion with Accountability".  Mark majored in Sociology and minored in Psychology during his collegiate years, but has found his greatest experiences and lessons in walking through his own path of change for decades. Mark has struggled with the same challenges as those he serves now. This is how Mark is able to relate, encourage, and assist those who are really striving for a Real Change! Mark’s passion and excitement speaks to his profound calling and focus in this field. He looks forward to continued years of service.',
  },
  {
    name: "Maria Blachard",
    title: "Lead Case Manager",
    pic: staff2,
    desc: "Maria is a Certified Peer Counselor, and embraces her role as Lead Case Manager for AAHAA Supportive Housing. She has been sober since 2016, and uses her recovery journey to uplift others through fellowship, compassion, and a level head. Her passion is to work with those in recovery because she has walked the same path and made it to the other side, and wants to show others that you can create a better life for yourself just like she did. She also has a certificate in Recognizing homelessness, and Challenging behaviors. She has raised two strong girls on her own. She knows it isn't about healing yourself, but healing the family too.",
  },
  {
    name: "Flowers Patterson",
    title: "House Manager",
    pic: staff3,
    desc: "Flowers began as a client of AAHAA, and now works through the company to give back to his recovery community. He is also a House Manager, and he practices patience and understanding to maintain balance within the home. These are qualities he extends into his career, always ensuring to take into account the person as a whole. Patterson has been sober since 2/10/21, and is active in recovery both in his professional life and in his personal life. He is thankful to have his sobriety so he can share its gifts with others. He is currently working towards earning his Peer Support Certification, and is excited for this journey.",
  },
  {
    name: "Bernard Franklin",
    title: "Field Operations Manaeger",
    pic: staff4,
    desc: "Bernard achieved sobriety in 2016, and worked as a House Manager for AAHAA Supportive Housing during that first year. In 2017, he began working at Cherry Hall, and honed in his passion for helping others through their recovery. As a Field Operations Manager for AAHAA Supportive Housing, Bernard is involved, hands on, and tenacious in his approach. He will match the effort you put into your sobriety, and hold you accountable when you need it most. His Peer Support Certification is anticipated for October of 2022.",
  },
];

const AAHAAPage = () => {
  return (
    <section id="aahaa">
      <img className="bg-image" src={bg} alt="path going through forest" />
      <Banner>
        <p>
          <strong>September 27th</strong> - New location for women with higher
          needs
        </p>
        <p>
          <strong>November 1st</strong> - New location for men with higher needs
        </p>
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
            href="https://www.facebook.com/aahaasoberliving"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="facebook logo" />
          </a>
        </div>
        <img className="title" src={logo} alt="A Walk To Freedom" />
        <p className="phone-number">Tel: +1 (253) 246-1613</p>
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
          <li>Therapeutic Classes</li>
          <li>Work Readiness Programs</li>
          <li>Structured and Supportive Clean and Sober Environment</li>
        </ul>
      </div>
      <div className="container testimonials">
        <h3>Testimonials</h3>
        <TestimonialSelector />
        <div className="separator" />
      </div>
      <div className="container team">
        <h3>Meet Our Team</h3>
        <TeamSelector team={team} />
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
