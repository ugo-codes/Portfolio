
import React, {useEffect, useState} from "react";

import Lottie from "./Lottie";
import axios from "axios";
import NavBar from "./NavBar";

require('dotenv').config();

function FirstDiv() {

  // The greeting is being emty initially when the app starts running
  // The greeting is being paired with the lottie type of animation using JavaScript object
  const [greeting, setGreeting] = useState({
    greeting: "",
    lottieSrc: ""
  });

  // useEffect is being used to wrap what will happen when the app is being mounted
  useEffect( () => {

    // axios is used to get the greeting from the server
    axios.get("/" + process.env.REACT_APP_ROUTE_ID + "/greetings")
      .then( res => {

        let src = "";

        // the if statement checks the greeting gotten from the server and then selects
        // the correct lottie animation to display depending on the greeting gotten from the server
        if(res.data === "Good Morning!"){
          src = "https://assets7.lottiefiles.com/temp/lf20_vLx7fX.json";
        }else if(res.data === "Good Afternoon!"){
          src = "https://assets4.lottiefiles.com/private_files/lf30_moaf5wp5.json";
        }else if(res.data === "Good Evening!"){
          src = "https://assets9.lottiefiles.com/packages/lf20_HlhzUG.json";
        }

        // the sets the useState greeting and lottie animation to what is gotten so it is being
        // displayed without refreshing the page
        setGreeting({
          greeting: res.data,
          lottieSrc: src
        });

      })
      // if an error occurs, it's being logged
      .catch( err => {
        console.log(err);
      });
  });

  // the design of the first div is being returned to display on the user screen
  return (
    <div className="container-fluid first-div center blue-background-color" id="into">

      <NavBar />

      <h2 className="greeting white-text-color">
       <Lottie
          height="100px"
          width="100px"
          src={greeting.lottieSrc}
          background="#28ABB9"
          className="right"
        />{greeting.greeting}</h2>

      <h2 className="name white-text-color">I'm ugzMAN</h2>
      <h4 className="title white-text-color">a programmer</h4>
      <Lottie
        height="300px"
        width="300px"
        src="https://assets8.lottiefiles.com/packages/lf20_ymbzgxgc.json"
      />
    </div>
  );
}

export default FirstDiv;
