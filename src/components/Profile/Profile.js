import React from "react";
import { Typography } from "@material-ui/core";
import myImage from "../../assets/images/displayImage.jpg";
import CustomTimeline, { CustomTimelineSeperator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

import "./Profile.css";
const CustomTimelineItem = ({ title, text, link }) => (
	<TimelineItem>
		<CustomTimelineSeperator />
		<TimelineContent className="timeline_content">
			{link ? (
				<Typography className="timelineItem_text">
					<span>{title}:</span>{" "}
					<a href={link} target="_blank" rel="noopener noreferrer">
						{text}
					</a>
				</Typography>
			) : (
				<Typography className="timelineItem_text">
					<span>{title}:</span> {text}
				</Typography>
			)}
		</TimelineContent>
	</TimelineItem>
);

const Profile = () => {
	return (
		<div className="profile container_shadow">
			<div className="profile_name">
				<div>
					<Typography className="name"> {resumeData.name}</Typography>
					<Typography className="title">{resumeData.title}</Typography>
				</div>
			</div>

			<figure className="profile_image">
				<img src={myImage} alt="" />
			</figure>

			<div className="profile_information">
				<CustomTimeline icon={<PersonOutlineIcon />}>
					<CustomTimelineItem title="Name" text={resumeData.name} />
					<CustomTimelineItem title="Title" text={resumeData.title} />
					{/* <CustomTimelineItem title="Job" text={resumeData.job} /> */}
					<CustomTimelineItem title="Address" text={resumeData.address} />

					{Object.keys(resumeData.socials).map((key) => (
						<CustomTimelineItem
							title={key}
							text={resumeData.socials[key].text}
							link={resumeData.socials[key].link}
						/>
					))}
				</CustomTimeline>
				<div className = "button_container">
					<CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
