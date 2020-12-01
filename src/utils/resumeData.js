import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default{
    name: 'Bishwo Purkuti',
    title: 'Software Engineer',
    birthday: 'October 26',
    job: 'Currently Pursuing',
    email: 'bishworajpurkuti@gmail.com',
    address: 'Healdsburg, California',

    socials: {
        facebook: {
            link: 'https://www.facebook.com',
            text: 'My Facebook',
            icon: <FacebookIcon/>,
        },
        twitter: {
            link: 'https://www.twitter.com',
            text: 'My Twitter',
            icon: <TwitterIcon/>,
        },
        linkedin: {
            link: 'https://www.linkedln.com',
            text: 'My LinkedIn',
            icon: <LinkedInIcon/>,
        },
        github: {
            link: 'https://www.github.com',
            text: 'My Github',
            icon: <GitHubIcon/>,
        },
    }

}