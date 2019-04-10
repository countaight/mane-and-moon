import React, { Component } from "react";
import styled from "styled-components";

const IntroImage = styled.img`
	object-fit: cover;
	height: 100vh;
	width: 100vw;
	z-index: -1;
`;

class Intro extends Component {
	render() {
		return <IntroImage src="/static/Hair.jpg" />;
	}
}

export default Intro;
