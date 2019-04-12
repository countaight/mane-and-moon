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
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Sidebar pose={this.props.open ? "open" : "closed"}>
				<ul>
					<NavLink>
						<Link href="#services">
							<a>Services</a>
						</Link>
					</NavLink>
					<NavLink>Portfolio</NavLink>
					<NavLink>Connect</NavLink>
				</ul>
			</Sidebar>
		);
	}
}

export default Nav;
