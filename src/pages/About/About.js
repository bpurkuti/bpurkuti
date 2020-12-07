import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "../Resume/Resume.css";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
	return (
		<>
			{" "}
			{/* About me */}
			<Grid container className="section pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 xs="12" className="section_title_text">
						About Me
					</h6>
				</Grid>

				<Grid item xs={12}>
					<span></span>
					<Typography variant="body2" className="aboutme_text">
						{resumeData.about}
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Portfolio;
