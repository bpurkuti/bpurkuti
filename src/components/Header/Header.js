import React from "react";
import {
	Button,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import {
	HomeRounded,
	SchoolRounded,
	WorkRounded,
	Facebook,
	Twitter,
	LinkedIn,
	Github,
	Telegram,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
	const pathName = props?.location?.pathname;

	return (
		<Navbar expand="lg" sticky="top" className="header">
			{/* Link to Home */}
			<Nav.Link as={NavLink} to="/">
				<Navbar.Brand className="header_home">
					{/* Icon */}
					<HomeRounded />
				</Navbar.Brand>
			</Nav.Link>

			<Navbar.Collapse>
				<Nav className="header_left">
					{/* Link to Resume */}
					<Nav.Link
						as={NavLink}
						to="/"
						className={pathName === "/" ? "header_link_active" : "header_link"}
					>
						Resume
					</Nav.Link>

					{/* Link to Portfolio */}
					<Nav.Link
						as={NavLink}
						to="/portfolio"
						className={
							pathName === "/portfolio" ? "header_link_active" : "header_link"
						}
					>
						Portfolio
					</Nav.Link>
				</Nav>

				<div className="header_right">
					{Object.keys(resumeData.socials).map((key) => (
						<a
							href={resumeData.socials[key].link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{resumeData.socials[key].icon}
						</a>
					))}

					<CustomButton text={"Hire Me"} icon={<Telegram />} />
				</div>
				{/* This Button originally went inside div above without className  */}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Header);
