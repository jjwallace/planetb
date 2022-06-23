import React from 'react';
import gsap from "gsap";

export default class ButtonLock extends React.Component {
	constructor(props) {
    super(props);
    this.state = {button: 1};

		this.handleClick = this.handleClick.bind(this)
		this.uuid = this.props.backgroundImage;
  }

	handleClick(event){
		event.stopPropagation();
		console.log('click', this.uuid  )
		if(this.state.button == 1){
			gsap.to(".button" + this.uuid, {scale: 0.5, duration: 0.2, ease: "strong.inOut"});
			this.setState({button: 0})
		}else{
			gsap.to(".button" + this.uuid, {scale: 1, duration: 0.2, ease: "strong.inOut"});
			this.setState({button: 1})
		}
		//gsap.to(".button", {scale: 0, x: -300, backgroundColor: "#4CAF50", duration: 0.5, ease: "strong.inOut"});

	}

	

  render() {

		//console.log('LOAD IMAGE', './assets/buttons/' + this.props.backgroundImage + '.jpg')
		//backgroundImage: `('./assets/buttons/${this.props.backgroundImage}.jpg')`,

		const buttonStyle = {
			borderRadius: '5px',
			
			background: this.props.background,
			padding: '3px',
			margin: '5px',
			width: '100px',
			height: '50px',
		}

		const imageStyle = {
			padding: '0px',
			margin: '0px',
			width: '100px',
			height: '100px',
		}

		return (
			<div style={buttonStyle} className={"button" + this.uuid} onClick={this.handleClick}>
				<img src={`./assets/buttons/${this.props.backgroundImage}.jpg`}  style={imageStyle} alt="display image" />
			</div>
		);
	}
}
