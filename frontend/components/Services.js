import styled from "styled-components";

import Section, { Paragraph, InnerSection, BufferDiv } from "./styles/Section";
import PriceItemList from "./PriceItemList";

const PriceItem = styled.div`
	display: grid;
	grid-template-columns: 1fr 20px;
	color: white;
	font-family: "Lato", sans-serif;
	font-weight: 400;
`;

const PriceList = styled.div`
	border: 1px solid ${props => props.theme.regOrange};
	padding: 10px;
`;

const Services = () => (
	<Section id="services">
		<InnerSection>
			<Paragraph>
				<h2>Price List</h2>
				<p>
					All services start at prices listed and require a consultation before
					finilizing the price.
				</p>
			</Paragraph>
			<Paragraph bg="dark">
				<PriceItemList />
			</Paragraph>
		</InnerSection>
	</Section>
);

export default Services;
