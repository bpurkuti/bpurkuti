import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Resume.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
	CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

const Resume = () => {
	return (
		<>
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
			{/* Education and experience */}
			<Grid container className="resume_content">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 xs={12} className="section_title_text">
						Resume
					</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container className = "resume_timeline">
						{/* Experiences */}
						<Grid item sm={12} md={6}>
							<CustomTimeline title="Work Experiences" icon={<WorkIcon />}>
								{resumeData.experiences.map((experience) => (
									<TimelineItem>
										<CustomTimelineSeperator />
										<TimelineContent>
											<Typography className="timeline_title">
												{experience.title}
											</Typography>
											<Typography variant="caption" className="timeline_date">
												{experience.date}
											</Typography>
											<Typography
												variant="body2"
												className="timeline_description"
											>
												{experience.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>

						{/* Education */}
						<Grid item sm={12} md={6}></Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* Services */}
			<Grid container className=""></Grid>
			{/* Skills */}
			<Grid container className=""></Grid>
			{/* Contact */}
			<Grid container className=""></Grid>
		</>
	);
};

export default Resume;
