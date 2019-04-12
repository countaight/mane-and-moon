import styled from "styled-components";

const Paragraph = styled.div`
	position: absolute;
	top: 100vh;
	width: 100%;
	height: 100vh;
	background-color: ${props => props.theme.offWhite};
`;

const Services = () => (
	<Paragraph id="services">Linda likes to cut hair</Paragraph>
);

export default Services;
