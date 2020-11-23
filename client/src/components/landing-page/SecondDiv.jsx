
import React from "react";

import Skills from "./Skills"

function SecondDiv() {
  // this just returns the second div with the html element to be displayed on the user screen
  return (
    <div className="container-fluid second-div center">
      <h2 className="blue-text-color">My Skils</h2>

      <Skills
        src = "https://assets8.lottiefiles.com/private_files/lf30_hlbuygvk.json"
        title = "Desktop Applications"
        text="I can make applications to run on your desktop machine for what ever purpose you want."
       />

       <Skills
         src = "https://assets4.lottiefiles.com/packages/lf20_hntzYU.json"
         title = "Websites/Web Apps"
         text="In need of a website? Contact me and let me help you achieve that."
        />

        <Skills
          src = "https://assets3.lottiefiles.com/packages/lf20_498gmG.json"
          title = "Android Applications"
          text="Do you wish to have an android application for your? I can help you achieve that also."
         />

    </div>
  );
}

export default SecondDiv;
