import React from "react";
import { Typography } from "@material-ui/core";
import "./Footer.css";
import resumeData from "../../utils/resumeData";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_left">
				<Typography className="footer_name">{resumeData.name}</Typography>
			</div>

			<div className="footer_right">
				<Typography className="footer_components">
					Developed by:{" "}
					<a href="/" target="_blank">
						Bishwo
					</a>
					<br />
					Background image from:{" "}
					<a href="https://www.freepik.com/vectors/background" target="_blank">
						www.freepik.com
					</a>
				</Typography>{" "}
			</div>
		</div>
	);
};

export default Footer;

// Credits Section:
