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
					<a href="https://reactjs.org/" target="_blank">
						React.js{" "}
					</a>
					| © 2020 Bishwo
					<br />
					<a
						href="https://www.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_11139547.htm"
						target="_blank"
						rel="noopener noreferrer"
					>
						Background image
					</a>
				</Typography>{" "}
			</div>
		</div>
	);
};

export default Footer;

// Credits Section:
