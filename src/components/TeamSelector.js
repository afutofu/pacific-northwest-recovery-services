import { useState } from "react";

import "../styles/TeamSelector.css";

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
    title: "Substance Use Disorder Professional Trainee",
    pic: staff3,
    desc: "Mr. Preston has been working in the behavioral Health for 6 years. He not only teaches but practices Mindfulness himself while on his own recovery journey. He is a Certified Peer Support as well as a Substance Use Disorder Professional Trainee. He has work as a manager in recovery homes and has worked with parents of addicts to help unite families. Mr. Preston’s goal is to help show people that are struggling recovery is possible and there is a way out of pain and suffering.",
  },
];

const TeamSelector = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div id="team-selector">
      <h2 className="name">
        {team[selected].name}{" "}
        <span className="title">{team[selected].title}</span>
      </h2>
      <div className="content">
        <img className="picture" src={team[selected].pic} alt="person" />
        <p className="desc">{team[selected].desc}</p>
      </div>
      <div className="options">
        <img
          src={staff1}
          alt="person"
          className={`option ${selected === 0 && "selected"}`}
          onClick={() => setSelected(0)}
        />
        <img
          src={staff2}
          alt="person"
          className={`option ${selected === 1 && "selected"}`}
          onClick={() => setSelected(1)}
        />
        <img
          src={staff3}
          alt="person"
          className={`option ${selected === 2 && "selected"}`}
          onClick={() => setSelected(2)}
        />
      </div>
    </div>
  );
};

export default TeamSelector;
