import { Grid, Icon, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./Resume.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
	CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ComputerTwoToneIcon from "@material-ui/icons/ComputerTwoTone";

const Resume = () => {
	return (
		<>
			{/* About me
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
			</Grid> */}

			{/* Projects */}
			<Grid container>
				<h5 className="main_title_text multicolortext">
					Hey, I'm Bishwo, an aspiring Software Engineer.{" "}
				</h5>
			</Grid>

			<Grid container className="resume_timeline pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 xs={12} className="section_title_text">
						My Projects
					</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container className="resume_content">
						{/* 1st Grid */}
						<Grid item sm={12} md={6}>
							<CustomTimeline icon={<ComputerTwoToneIcon />}>
								{resumeData.projects1.map((project) => (
									<TimelineItem>
										<CustomTimelineSeperator />
										<TimelineContent>
											<Typography className="timeline_title">
												{project.title}
											</Typography>
											<Typography variant="caption" className="timeline_date">
												{project.date}
											</Typography>
											<Typography
												variant="body2"
												className="timeline_description aboutme_text"
											>
												{project.description.map((element) => (
													<Typography variant="body2">
														<Paper elevation={1} className="description_paper">
															{element}
														</Paper>
													</Typography>
												))}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>

						{/* 2nd Grid */}
						<Grid item sm={12} md={6}>
							<CustomTimeline icon={<ComputerTwoToneIcon />}>
								{resumeData.projects2.map((project) => (
									<TimelineItem>
										<CustomTimelineSeperator />
										<TimelineContent>
											<Typography className="timeline_title">
												{project.title}
											</Typography>
											<Typography variant="caption" className="timeline_date">
												{project.date}
											</Typography>
											<Typography
												variant="body2"
												className="timeline_description aboutme_text"
											>
												{project.description.map((element) => (
													<Typography variant="body2">
														<Paper elevation={1} className="description_paper">
															{element}
														</Paper>
													</Typography>
												))}{" "}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* Skills */}

			<Grid container className="section p_50">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 xs={12} className="section_title_text">
						Skills
					</h6>
				</Grid>
			</Grid>

			<Grid container className="section graybg pb_45 p_50" spacing={3}>
				{resumeData.skills.map((skill) => (
					<Grid item xs={12} sm={6} md={3}>
						<Paper elevation={3} className="skill">
							<Typography variant="h6" className="skill_title">
								{skill.title}
							</Typography>

							{skill.description.map((element) => (
								<Typography variant="body2" className="skill_description">
									<TimelineDot variant={"outlined"} className="timeline_dot" />
									{element}
								</Typography>
							))}
						</Paper>
					</Grid>
				))}
			</Grid>

			{/* interests */}
			<Grid container className="section pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 xs={12} className="section_title_text">
						My Interests
					</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container spacing={3} justify="space-around">
						{resumeData.interests.map((interest) => (
							<Grid item xs={12} sm={6} md={3}>
								<div className="interest">
									<Icon className="interest_icon">{interest.icon}</Icon>
									<Typography className="interest_title" variant="h6">
										{" "}
										{interest.title}
									</Typography>
									<Typography className="interest_description" variant="body2">
										{" "}
										{interest.description}
									</Typography>
								</div>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>

			{/* Education and experience */}
			<Grid container className="resume_timeline pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 xs={12} className="section_title_text">
						My Experiences
					</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container className="resume_content">
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
						<Grid item sm={12} md={6}>
							<CustomTimeline title="Education" icon={<SchoolIcon />}>
								{resumeData.education.map((education) => (
									<TimelineItem>
										<CustomTimelineSeperator />
										<TimelineContent>
											<Typography className="timeline_title">
												{education.title}
											</Typography>
											<Typography variant="caption" className="timeline_date">
												{education.date}
											</Typography>
											<Typography
												variant="body2"
												className="timeline_description"
											>
												{education.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* Contact */}
			<Grid container className=""></Grid>
		</>
	);
};

export default Resume;
