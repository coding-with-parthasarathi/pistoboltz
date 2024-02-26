// components/Navbar/index.js
import './index.css';
import React from "react";
import pb from './logo.gif';
import tame from './tame.png';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/home">
						<img src={pb} alt='pb' height='85px'/>
					</NavLink>
                    <NavLink to="/about" >
						About Us
					</NavLink>
					<NavLink to="/events" activeStyle>
						Events & Workshops
					</NavLink>
					<NavLink to="/team" activeStyle>
						Team
					</NavLink>
					<NavLink to="/sponsors" activeStyle>
						Sponsors
					</NavLink>
					<NavLink to="/contacts" activeStyle>
						Contact Us
					</NavLink>
					<NavBtn>
						<NavBtnLink to='/sign-up'>
							Sign Up
						</NavBtnLink>
					</NavBtn>
					<NavLink to="/tame">
						<img src={tame} alt='tame' height='85px'/>
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
