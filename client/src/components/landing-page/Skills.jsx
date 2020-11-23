
import React from "react";

import Lottie from "./Lottie";

function Skills(props) {
  // this is used in the second SecondDiv.jsx
  // it's used 3 times and being seperated as a component in order to avoid repetition
  return (
    <div className="container row skills">
      <div className="col-lg-5">
        <Lottie
          height = "250px"
          widtth = "200px"
          src={props.src}

        />
      </div>
      <div className="col-lg-7 skills-text">
        <h3 className="blue-text-color">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Skills
