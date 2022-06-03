import React from 'react';
import gsap from "gsap";

function Button() {

	function handleClick(){
		console.log('click')
		gsap.to(".button", {scale: 0, x: -300, backgroundColor: "#4CAF50", duration: 0.3, ease: "strong.inOut"});
	}

	gsap.to(".button", {scale: 1, backgroundColor: "#4CAF50", duration: 1, ease: "strong.inOut"});

  return (
    <div className="button" onClick={handleClick}>
      HELLO
    </div>
  );
}

export default Button;