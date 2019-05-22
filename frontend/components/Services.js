import React, { Component } from 'react';
import styled from "styled-components";

import Section, { Paragraph, InnerSection, BufferDiv } from "./styles/Section";
import PriceItemList from "./PriceItemList";

class Services extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
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
	}
}

export default Services;
