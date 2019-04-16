import styled from "styled-components";
import Section, { Paragraph, InnerSection, BufferDiv } from "./styles/Section";

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
			</Paragraph>
			<Paragraph bg="dark">
				<PriceList>
					<PriceItem>
						<span>HAIR CUT</span>
						<span>25</span>
					</PriceItem>
					<PriceItem>
						<span>CUT/BLOWDRY</span>
						<span>35</span>
					</PriceItem>
					<PriceItem>
						<span>CUT/BLOWDRY/STYLE</span>
						<span>45</span>
					</PriceItem>
					<PriceItem>
						<span>TRIM</span>
						<span>8</span>
					</PriceItem>
					<PriceItem>
						<span>CHILDREN'S HAIRCUT</span>
						<span>10</span>
					</PriceItem>
				</PriceList>
			</Paragraph>
		</InnerSection>
	</Section>
);

export default Services;
