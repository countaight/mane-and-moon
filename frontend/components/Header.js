import Link from "next/link";
import posed from "react-pose";
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
  padding: 2rem;
  cursor: pointer;
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.regOrange};
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
    z-index: 999;
    box-shadow: ${props => props.theme.bs};
    transition: 400ms;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Bar = posed.div({
  open: {
    opacity: ({ opacity }) => opacity,
    rotate: ({ angle }) => angle,
    y: ({ y }) => y
  },
  closed: { opacity: 1, rotate: 0, y: 0 }
});

const MenuBar = styled(Bar)`
  width: 35px;
  height: 5px;
  background-color: ${props =>
    props.top ? props.theme.offWhite : props.theme.black};
  margin: 3px 10px;
  transition: background-color 400ms;
`;

const Header = props => (
  <StyledHeader top={props.top}>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Book an Appointment!</a>
        </Link>
      </Logo>
      <MenuIcon onClick={props.toggleSidebar}>
        <MenuBar
          top={props.top}
          pose={props.open ? "open" : "closed"}
          angle={-45}
          y={11}
          opacity={1}
        />
        <MenuBar
          top={props.top}
          pose={props.open ? "open" : "closed"}
          angle={0}
          y={0}
          opacity={0}
        />
        <MenuBar
          top={props.top}
          pose={props.open ? "open" : "closed"}
          angle={45}
          y={-11}
          opacity={1}
        />
      </MenuIcon>
      <Nav open={props.open} />
    </div>
  </StyledHeader>
);

export default Header;
