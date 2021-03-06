import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  darkBlue: "#000260",
  lightBlue: "#6364A0",
  lightGrey: "#E1E1E1",
  regOrange: "#ff9a00",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: "white";
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit
	}
	body {
		background-color: green;
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
		font-family: 'Roboto', sans-serif;
	}
	a {
		text-decoration: none;
		color: ${theme.black};
	}
	.u-lock-scroll {
  	overflow: hidden !important;
	}
`;

class Page extends Component {
  state = {
    top: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.atTop);
    this.atTop();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.atTop);
  }

  atTop = () => {
    if (window.pageYOffset > 60) {
      return this.setState({ top: false });
    }

    return this.setState({ top: true });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header
            open={this.props.open}
            toggleSidebar={this.props.toggleSidebar}
            top={this.state.top}
          />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
