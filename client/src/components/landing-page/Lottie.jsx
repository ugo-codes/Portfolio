
import React from "react";

import { Player } from '@lottiefiles/react-lottie-player';

function Lottie(props){

  // the size the lottie is going to be is passed where it is being imported
  let size = {
    height: props.height,
    width: props.width
  }

  // The lottie animation is being returned
  return (
    <Player
       autoplay={true}
       loop={true}
       src={props.src}
       style={size}
       background={props.background !== null && props.background}
       className={props.className !== null && props.className}>
    </Player>
  );
}

export default Lottie;
