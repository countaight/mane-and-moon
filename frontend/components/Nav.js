import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import posed from "react-pose";

const sidebarProps = {
  open: { x: "-100%", transition: { ease: "linear" } },
  closed: { x: "0%", transition: { ease: "linear" } }
};

const Sidebar = styled(posed.nav(sidebarProps))`
  position: fixed;
  left: 100vw;
  top: 60px;

  ul {
    padding: 0;
    margin: 0;
    background: ${props => props.theme.offWhite};
    list-style-type: none;
    text-align: center;
    box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.09);
  }
`;

const NavLink = styled.li`
  font-weight: 300;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

class Nav extends Component {
  state = {
    links: ["home", "services", "portfolio", "connect"],
    els: {}
  };

  componentDidMount() {
    this.getTops();
    window.addEventListener("resize", this.getTops);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getTops);
  }

  getTops = () => {
    const { links, els } = this.state;
    links.forEach((link, i) => {
      const el = document.getElementById(link);

      if (!el) return;

      els[link] = (window.innerHeight - 60) * i;

      this.setState({ ...this.state, els });
    });
  };

  scrollTo = (e, link) => {
    e.preventDefault();
    const { els } = this.state;
    window.scrollTo({ top: els[link], behavior: "smooth" });
    this.props.toggleSidebar();
  };

  renderLinks = () => {
    const { links } = this.state;

    return links.map(link => (
      <NavLink key={link}>
        <Link href={`#${link}`}>
          <a onClick={e => this.scrollTo(e, link)}>{link}</a>
        </Link>
      </NavLink>
    ));
  };

  render() {
    const { open } = this.props;

    return (
      <Sidebar pose={open ? "open" : "closed"}>
        <ul>{this.renderLinks()}</ul>
      </Sidebar>
    );
  }
}

export default Nav;
