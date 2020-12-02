import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './resumeData.css'

export default{
    name: 'Bishwo Purkuti',
    title: 'Software Engineer',
    birthday: 'October 26',
    job: 'Currently Pursuing',
    address: 'California',

    socials: {
        Email: {
            link: "mailto:bishworajpurkuti@gmail.com",
            text: 'My Email',
            icon: <EmailIcon/>,
        },
        Linkedin: {
            link: 'https://www.linkedin.com/in/bishwo-purkuti-a3b0101a3/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon/>,
        },
        Github: {
            link: 'https://www.github.com/bpurkuti',
            text: 'My Github',
            icon: <GitHubIcon/>,
        },
    }

}