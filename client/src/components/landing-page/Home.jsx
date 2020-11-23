
import React from "react";

import FirstDiv from "./FirstDiv";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import FourthDiv from "./FourthDiv";

function Home() {
  // This is the parent of the first page or rather the home page
  return (
    <div>
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />      
      <FourthDiv />
    </div>
  );
}

export default Home;
