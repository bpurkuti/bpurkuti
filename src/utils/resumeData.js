import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./resumeData.css";

export default {
	name: "Bishwo Purkuti",
	title: "Software Engineer",
	birthday: "October 26",
	job: "Currently Pursuing",
	address: "California",

	socials: {
		Email: {
			link: "mailto:bishworajpurkuti@gmail.com",
			text: "My Email",
			icon: <EmailIcon />,
		},
		Linkedin: {
			link: "https://www.linkedin.com/in/bishwo-purkuti-a3b0101a3/",
			text: "My LinkedIn",
			icon: <LinkedInIcon />,
		},
		Github: {
			link: "https://www.github.com/bpurkuti",
			text: "My Github",
			icon: <GitHubIcon />,
		},
	},
	about:
		"I came across the video game programming internship that you have listed at the University of California, Merced Handshake system, and wanted to apply myself to it.\n\n I am a fourth-year computer science and engineering student at the University of California, Merced. I have worked on several different video game projects, both private and collaboration with peers. Some of my personal projects include Tic Tac Toe, Pong, platforming game, and Space Invaders. I have also collaborated with different teammates for Space Invaders and a platformer game, where the former was during the 2019 HackMerced event. During the event, we worked with a completely new framework to design a game with my team and demonstrated my ability as a quick-learner and team worker. Additionally, I have experience with the software Unreal Engine that you want us to work with, since, I am currently using it to design a shooter game as a personal project.\n\nI would very much like to experience this internship as I believe that I would get a lot of value out of it and also be able to provide value to any team that I join. I would be very interested in interviewing for this internship opportunity. Thank you for your consideration.",

	experiences: [
		{
			title: "Dietary Aide @ Healdsburg Senior Living",
			date: "June 2019 - August 2019",
			description:
				"Served as a inventory manager in the kitchen, and served residents food as a waiter",
		},

		{
			title: "Looking for Job",
			date: "August 2020 - present",
			description: "Currently seraching for jobs",
		},
	],

	education: [
		{
			title: "University of California-Merced",
			date: "August 2016 - August 2020",
			description: "Bachelors in Computer Science and Engineering",
		},

		{
			title: "Healdsburg High Sschool",
			date: "August 2013 - June 2016",
			description: "Attended High School",
		},
	],
};
