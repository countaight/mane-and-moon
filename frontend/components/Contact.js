import React, { Component } from "react";
import styled from "styled-components";

import Section, { Paragraph, InnerSection } from "./styles/Section";

class Contact extends Component {
  render() {
    return (
      <Section id="connect">
        <InnerSection>
          <Paragraph>
            <h2>Connect</h2>
            <img src={"/static/makeup_1.jpg"} style={{ width: "150px" }} />
            <img
              src={"/static/color_2.jpg"}
              style={{
                width: "150px",
                position: "relative",
                top: "130px",
                left: "-20px"
              }}
            />
          </Paragraph>
        </InnerSection>
      </Section>
    );
  }
}

export default Contact;
