import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";

import PriceItem from "./PriceItem";

const itemDescProps = {
  closed: { height: 0 },
  open: { height: "auto" }
};

const ScissorsIcon = posed.img({
  closed: { rotate: 90 },
  open: { rotate: 180 }
});

const ItemDesc = styled(posed.div(itemDescProps))`
  background: ${props => props.theme.lightBlue};
  overflow: hidden;
  width: 100%;
  grid-column: 1 / span 2;
  white-space: pre-wrap;
`;

const PriceList = styled.div`
  border: 1px solid ${props => props.theme.regOrange};
  padding: 10px;
`;

class PriceItemList extends Component {
  state = {
    open: false,
    items: [
      {
        name: "HAIR SCULPTING",
        description: `Cut/trim/shape, shampoo, conditioner, & blow dry (thermal set not included)\nLength charges apply\nApprox. 60 min`,
        options: [
          {
            name: "Women",
            price: "55+"
          },
          {
            name: "Men",
            price: "35+"
          },
          {
            name: "Youth (10 years and under)",
            price: "25+"
          }
        ]
      }
    ]
  };

  render() {
    const { open, items } = this.state;
    return (
      <PriceList>
        {items.map(({ name, description, options }, i) => (
          <PriceItem
            key={i}
            onClick={() => this.setState({ open: open === i ? false : i })}
          >
            <span>{name}</span>
            <span>
              <ScissorsIcon
                pose={open === i ? "open" : "closed"}
                src="/static/scissors.png"
                style={{ height: "24px" }}
              />
            </span>
            <ItemDesc pose={open === i ? "open" : "closed"}>
              <p style={{ textAlign: "center" }}>{description}</p>
              {options.map(({ name, price }, i) => (
                <PriceItem key={`name${i}`}>
                  <span>{name}</span>
                  <span>{price}</span>
                </PriceItem>
              ))}
            </ItemDesc>
          </PriceItem>
        ))}
      </PriceList>
    );
  }
}

export default PriceItemList;
