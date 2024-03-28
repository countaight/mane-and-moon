import React, { Component } from 'react';
import styled from 'styled-components';

import Section, { Paragraph, InnerSection } from './styles/Section';
import Modal from './Modal';

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  overflow: scroll;
  border: solid white 1px;
  border-color: ${props => props.theme.regOrange};
  max-width: 900px;
  margin: 0 auto;

  img {
    width: 100%;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.09);
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;

    img {
      height: 100%;
    }
  }
`;

class Portfolio extends Component {
  state = {
    images: [
      'hair_sculpting_2.jpg',
      'hair_sculpting_4.jpg',
      'hair_sculpting_men_1.jpg',
      'hair_sculpting_men_2.jpg',
      'color_1.jpg',
      'makeup_2.jpg',
    ],
    imageOpen: false,
    selectedImage: null,
  };

  selectImage = source => {
    this.setState({ imageOpen: true, selectedImage: `/static/${source}` });
    this.toggleScrollLock();
  };

  closeImage = () => {
    this.setState({ imageOpen: false, selectedImage: null });
    this.toggleScrollLock();
  };

  toggleScrollLock = () =>
    document.querySelector('html').classList.toggle('u-lock-scroll');

  render() {
    return (
      <Section id="portfolio">
        <InnerSection dark>
          <Paragraph>
            <h2>Mane Gallery</h2>
          </Paragraph>
          <Gallery>
            {this.state.images.map((imageSrc, i) => (
              <img
                key={imageSrc + i}
                onClick={() => this.selectImage(imageSrc)}
                src={`/static/${imageSrc}`}
              />
            ))}
          </Gallery>
          {this.state.imageOpen && (
            <Modal
              closeImage={this.closeImage}
              image={this.state.selectedImage}
            />
          )}
        </InnerSection>
      </Section>
    );
  }
}

export default Portfolio;
