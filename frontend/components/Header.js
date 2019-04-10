import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

import Nav from "../components/Nav";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 1rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  padding: 2rem;
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.darkBlue};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 2px solid ${props => props.theme.offWhite};
    display: grid;
    position: fixed;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    background-color: ${props =>
      props.top ? "transparent" : props.theme.offWhite};
  }
`;

const Header = props => (
  <StyledHeader top={props.top}>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Mane and Moon</a>
        </Link>
      </Logo>
      <div onClick={props.toggleSidebar}>X</div>
      <Nav open={props.open} />
    </div>
  </StyledHeader>
);

export default Header;
