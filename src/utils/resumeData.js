import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

export default {
	name: "Bishwo Purkuti",
	title: "Software Engineer",
	birthday: "October 26",
	job: "Currently Pursuing",
	cell: "7074770286",
	address: "California",


	projects: [
		{
			title: "Game Development",
			description: "My interest in making games comes from my love for playing them. I have made a few different games as personal project, and would be interested in diving deeper.",
			icon: <SportsEsportsIcon />,
		},

		{
			title: "Full Stack Development",
			description:
				"I have come to appreciate web development after getting to work with both frontend and backend. My most notable project includes social good website written in using Django.",
			icon: <LanguageIcon />,
		},

		{
			title: "Software Development",
			description: "There is always a new technology, and new thing to discover and build. I probably like application part of it better, but systems is also inteeresting.",
			icon: <DesktopMacIcon />,
		},

		{
			title: "Mobile App Development",
			description: "Phone apps are cool. I have been experimenting with Android Studio and Flutter for various projects. I haven't been able to try swift due to lack of hardware, but I am confident I can learn fast due to my c++ background",
			icon: <PhoneAndroidIcon />,
		},
	],



	socials: {
		Email: {
			link: "mailto:bishworajpurkuti@gmail.com",
			text: "bishworajpurkuti@gmail",
			icon: <EmailIcon />,
		},
		Linkedin: {
			link: "https://www.linkedin.com/in/bishwo-purkuti-a3b0101a3/",
			text: "LinkedIn",
			icon: <LinkedInIcon />,
		},
		Github: {
			link: "https://www.github.com/bpurkuti",
			text: "Github",
			icon: <GitHubIcon />,
		},
	},
	about:
		"Hey, I’m Bishwo. An aspiring Software Engineer from Healdsburg, California. \n\n Welcome to my website, where you can see my various interests, projects, and learn a bit more about me. \n\n My primary programming languages have been C++, Java, and C for a while. However, recently, I have been coding more with Python, and I feel that it is amazing. I love the fact that if you want to do create something quickly, you think of pseudocode, its probably already ready as a python program. One of the most basic but also the coolest example that comes to my mind is printing a list in python. Whereas in C++ and others, you have to iterate manually through a list, python is as simple as a print(list). It’s freakin' awesome. I do know that python takes a hit in its performance to do these kinds of things but I still appreciate it.\n\n When it comes to spending my free time, there are a few things I do. Sometimes I like to put time into my personal projects. Most of the time, I go out with people, find a new restaurant/food stand/anything food-related and eat there. My friends and I are really into finding good but cheap places to eat. My favourite food to eat out is Thai Fried Rice with Shrimp and Pork. \n\n I am also into gaming and play a variety of genres. I like single-player games and my favourite game is Witcher 3. I also play League of Legends and offered a part of my soul to reach Platinum during season 9. Fun fact about me and games, to play CDPR’s Cyberpunk 2077, I built my first ever desktop PC for the maximum “graphics” at around September 2019 and the game was supposed to come in April 2020. By the time the game released, which is/was December 2020(After multiple delays), my PC is/was already dying. Also, Nvidia released their 3000 series graphics cards in between this time which is way stronger for very cheap price. I laugh at myself sometimes due to this.\n\n Besides gaming, I like watching animes and reading mangas. My favourite anime is probably tied between Hunter x Hunter and Gintama. Favourite manga is One Piece. I recommend people to watch My Hero Academia, or One Punch MAN if getting into anime.\n\n If you want to contact or connect with me, you can click on various links and icons spread across this site. You can email me about jobs, collaboration,  dank memes, places to eat,  new and exciting games, or which shounen anime is the best. \n\n Peace!",

	experiences: [
		{
			title: "Dietary Aide @ Healdsburg Senior Living",
			date: "June 2019 - August 2019",
			description:
				"Served as a inventory manager in the kitchen, and served residents food as a waiter",
		},

		{
			title: "Freelance Web Developer",
			date: "July 2017",
			description: "Created a website for a local beauty and massage firm",
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

	interests: [
		{
			title: "Game Development",
			description: "My interest in making games comes from my love for playing them. I have made a few different games as personal project, and would be interested in diving deeper.",
			icon: <SportsEsportsIcon />,
		},

		{
			title: "Full Stack Development",
			description:
				"I have come to appreciate web development after getting to work with both frontend and backend. My most notable project includes social good website written in using Django.",
			icon: <LanguageIcon />,
		},

		{
			title: "Software Development",
			description: "There is always a new technology, and new thing to discover and build. I probably like application part of it better, but systems is also inteeresting.",
			icon: <DesktopMacIcon />,
		},

		{
			title: "Mobile App Development",
			description: "Phone apps are cool. I have been experimenting with Android Studio and Flutter for various projects. I haven't been able to try swift due to lack of hardware, but I am confident I can learn fast due to my c++ background",
			icon: <PhoneAndroidIcon />,
		},
	],

	skills: [
		{ title: "Favourites", description: ["C++", "Python", "Java"] },
		{
			title: "FRONT-END",
			description: ["React.js", "JavaScript", "TypeScript"],
		},
		{ title: "BACK-END", description: ["Node.js", "Java", "Python"] },
		{ title: "DATABASES", description: ["Nodejs", "MySQL", "Firebase"] },

	],
};
