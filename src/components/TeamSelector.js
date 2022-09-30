import { useState } from "react";

import "../styles/TeamSelector.css";

const TeamSelector = ({ team }) => {
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
        {team.map((staff, index) => {
          return (
            <img
              src={staff.pic}
              key={staff.name + index}
              alt="person"
              className={`option ${selected === index && "selected"}`}
              onClick={() => setSelected(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamSelector;
