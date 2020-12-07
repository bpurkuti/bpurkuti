import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "../Resume/Resume.css";
import resumeData from "../../utils/resumeData";

const Contact = () => {
	return (
		<>
			{" "}
			{/* About me */}
			<Grid container className="section contact_center">
				<Grid item className="section_title">
					<span></span>
					<h6 xs="12" className="section_title_text">
						Contact
					</h6>
				</Grid>
			</Grid>
            
            <Grid className="contact_center">
					<div>
						<Typography className="name "> {resumeData.name}</Typography>
						<Typography className="title">{resumeData.title}</Typography>
                        <Typography className="title">{resumeData.cell}</Typography>
						<Typography className="title">{resumeData.email}</Typography>

					</div>
				</Grid>
		</>
	);
};

export default Contact;
