import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import posed from "react-pose";

const sidebarProps = {
	open: { x: "100%" },
	closed: { x: "0%" }
};

const Sidebar = styled(posed.nav(sidebarProps))`
	position: fixed;
	right: 0px;
	top: 60px;
	ul {
		padding: 0;
		margin: 0;
		background: ${props => props.theme.offWhite};
		list-style-type: none;
		text-align: center;

		li {
			padding: 0;
			margin: 0;
		}
	}
	width: 100px;
`;

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Sidebar pose={this.props.open ? "open" : "closed"}>
				<ul>
					<li>
						<Link href="#services">
							<a>Services</a>
						</Link>
					</li>
					<li>Portfolio</li>
					<li>Connect</li>
				</ul>
			</Sidebar>
		);
	}
}

export default Nav;
