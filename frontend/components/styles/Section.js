import styled from "styled-components";

const Section = styled.div`
	position: sticky;
	top: 60px;
	width: 100%;
	height: 100vh;
`;

const InnerSection = styled.div`
	background-color: white;
	height: 100%;
	padding: 20px;
`;

const Paragraph = styled.div`
	background-color: ${props =>
		props.bg === "dark" ? props.theme.darkBlue : props.theme.offWhite};
	padding: 10px;

	h2 {
		font-family: "Italianno";
		font-weight: 200;
		font-size: 3.4rem;
		padding: 0 10px;
		margin: 0;
	}

	p {
		margin: 0;
		color: ${props => (props.bg === "dark" ? "white" : "black")};
		font-family: "Roboto";
		font-weight: 300;
		line-height: 1.5;
		padding: 10px;
	}
`;

export default Section;
export { Paragraph, InnerSection };
