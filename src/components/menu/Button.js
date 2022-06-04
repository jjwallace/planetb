import React from 'react';
import gsap from "gsap";

class Button extends React.Component {
	constructor(props) {
    super(props);
    this.state = {button: 1};

		this.handleClick = this.handleClick.bind(this)
  }

	handleClick(event){
		event.stopPropagation();
		console.log('click',this.state.button )
		if(this.state.button == 1){
			gsap.to(".button", {scale: 0.5, duration: 0.2, ease: "strong.inOut"});
			this.setState({button: 0})
		}else{
			gsap.to(".button", {scale: 1, duration: 0.2, ease: "strong.inOut"});
			this.setState({button: 1})
		}
		//gsap.to(".button", {scale: 0, x: -300, backgroundColor: "#4CAF50", duration: 0.5, ease: "strong.inOut"});

	}

	

  render() {

		console.log('LOAD IMAGE', '/assets/buttons/' + this.props.backgroundImage + '.jpg')
		//`url(./assets/buttons/${this.props.backgroundImage}.jpg)`
		//`url(./assets/buttons/${this.props.backgroundImage + ".jpg"})`
		
		//`url("/assets/buttons/${this.props.backgroundImage}.jpg")`
		const buttonStyle = {
			borderRadius: '5px',
			backgroundImage: 'url(../assets/buttons/'+this.props.backgroundImage+'.jpg)',
			background: this.props.background,
			padding: '10px',
			margin: '3px',
			width: '50px',
			height: '50px',
		}

		return (
			<div style={buttonStyle} className="button" onClick={this.handleClick}>
				
			</div>
		);
	}
}

export default Button;