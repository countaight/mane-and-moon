import styled from "styled-components";
import Section, { Paragraph, InnerSection, BufferDiv } from "./styles/Section";

const Gallery = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
	background-color: ${props => props.theme.lightGrey};
	padding: 10px;

	img {
		width: 100%;
		height: 150px;
		box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.09);
	}
`;

const Portfolio = () => (
	<Section id="portfolio">
		<InnerSection>
			<Paragraph>
				<h2>Mane Gallery</h2>
			</Paragraph>
			<Gallery>
				<img src={"/static/hair_sculpting_1.jpg"} />
				<img src={"/static/hair_sculpting_2.jpg"} />
				<img src={"/static/hair_sculpting_3.jpg"} />
				<img src={"/static/hair_sculpting_4.jpg"} />
				<img src={"/static/hair_sculpting_men_1.jpg"} />
				<img src={"/static/color_1.jpg"} />
				<img src={"/static/color_2.jpg"} />
				<img src={"/static/makeup_1.jpg"} />
				<img src={"/static/makeup_2.jpg"} />
			</Gallery>
		</InnerSection>
	</Section>
);

export default Portfolio;
