import { useState } from "react";

const testimonials = [
  {
    name: "Jacob",
    quote:
      "I have been able to start and have 2 successful businesses going. With the support and help from AAHAA I have gained so much knowledge and support to stay sober and away from drugs and all negative parts of my past. I know I would not be who I am today or in the position I am in without the support of AAHAA, I would not be so happy. Thank you for all your support!",
  },
  {
    name: "Jose",
    quote:
      "This program has been a blessing to me, my family, and many others who have had to fight the battle of chemical dependency. I would encourage anyone who is interested in help for themselves or others, to reach out and contact AAHAA Clean and Sober Living — you won’t regret it!",
  },
  {
    name: `Reese`,
    quote:
      "Cannot say enough good things about this Company. I haven’t come across one person, including ones that had to leave the program, say anything but positive things about staff, Management, Case Workers, or the Owner. They have saved many lives. including mine for sure! There are programs that AAHAA works with to get your Rent paid for, REACH being one of them!",
  },

  {
    name: "Nadine M.",
    quote:
      "I have more responsibility with the program, and I also now have a great job working downtown Seattle. AAHAA has given me the tools I needed to get my life and self-esteem back. I am truly humbled and grateful to this program.",
  },
];

const TestimonialSelector = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div id="testimonial-selector">
      <h2 className="name">{testimonials[selected].name} </h2>
      <div className="content">
        <p className="quote">"{testimonials[selected].quote}"</p>
      </div>
      <div className="options">
        {testimonials.map((testimonial, index) => {
          return (
            <h3
              key={testimonial.name}
              alt="person"
              className={`option ${selected === index && "selected"}`}
              onClick={() => setSelected(index)}
            >
              {testimonial.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSelector;
