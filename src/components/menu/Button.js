import React from 'react';
import gsap from "gsap";

class Car extends React.Component {

	render() {
		buttonState = 1;

		handleClick(){
			console.log('click')
			if(buttonState == 1){
				gsap.to(".button", {scale: 0.5, duration: 0.5, ease: "strong.inOut"});
				buttonState = 0
			}else{
				gsap.to(".button", {scale: 1, duration: 0.5, ease: "strong.inOut"});
				buttonState = 1;
			}
			//gsap.to(".button", {scale: 0, x: -300, backgroundColor: "#4CAF50", duration: 0.5, ease: "strong.inOut"});

		}

		gsap.to(".button", {scale: 1, backgroundColor: "#4CAF50", duration: 1, ease: "strong.inOut"});

		return (
			<div className="button" onClick={handleClick}>
				HELLO
			</div>
		);
	}
}

export default Button;