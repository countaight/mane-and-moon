import React, { Component } from "react";
import styled from "styled-components";

const IntroImage = styled.div`
	position: fixed;
	background-image: url("/static/Hair.jpg");
	background-size: cover;
	background-attachment: fixed;
	background-position: center center;
	display: flex;
	height: 100vh;
	width: 100vw;
	z-index: -1;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: white;
	text-align: center;

	h2 {
		text-transform: uppercase;
		font-weight: 300;
		font-size: 1.5rem;
	}

	h1 {
		.and {
			font-family: "Italianno", serif;
			font-size: 5rem;
		}
		.mane,
		.moon {
			text-transform: uppercase;
		}
		.mane {
			font-style: italic;
		}
		.moon {
			font-family: "Lato";
			font-weight: 700;
		}
	}

	.scissors {
		font-size: 2em;
		transform: rotate(90deg);
	}

	.quote {
		font-size: 1.5em;
		font-family: "Italianno";
		width: 50%;
		line-height: 1.2em;
		text-align: right;
		padding-right: 20px;
	}
`;

class Intro extends Component {
	render() {
		return (
			<IntroImage>
				<h2>Professional Hair Artist</h2>
				<h1>
					<span className="mane">Mane</span>
					<span className="and">&</span> <span className="moon">Moon</span>
				</h1>
				<p className="scissors">✂︎</p>
				<p className="quote">
					"...in an instance of a full moon, she found her mane untamable..."
				</p>
			</IntroImage>
		);
	}
}

export default Intro;
