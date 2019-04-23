import styled from "styled-components";

const PriceItem = styled.div`
	display: grid;
	grid-template-columns: 1fr 25px;
	color: white;
	font-family: "Lato", sans-serif;
	font-weight: 400;
	padding: 0px 10px;
	cursor: pointer;

	&:active {
		color: ${props => props.theme.offWhite};
	}
`;

export default PriceItem;
