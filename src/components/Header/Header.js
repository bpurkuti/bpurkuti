import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HomeRounded, Telegram } from "@material-ui/icons";
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

			<Navbar.Toggle />

			<Navbar.Collapse>
				<Nav className="header_left">
					{/* Link to Portfolio */}
					<Nav.Link
						as={NavLink}
						to="/about"
						className={
							pathName === "/about" ? "header_link_active" : "header_link"
						}
					>
						About
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
					<Nav className="header_left">
						{/* Link to Portfolio */}
						<Nav.Link
							as={NavLink}
							to="/contact"
							className={
								pathName === "/contact" ? "header_link_active" : "header_link"
							}
						>
							<CustomButton text={"Hire Me"} icon={<Telegram />} />
						</Nav.Link>
					</Nav>
				</div>
				{/* This Button originally went inside div above without className  */}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Header);
