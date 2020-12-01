import React from 'react';
import {Typography} from '@material-ui/core';
import myImage from '../../assets/images/displayImage.jpg'
import CustomTimeline from '../Timeline/Timeline'
import './Profile.css';

const Profile = () => { 
    return (
        <div className = 'profile container_shadow'>
            <div className = 'profile_name'>
                <div>
                    <Typography className = 'name'> Bishwo Purkuti</Typography>
                    <Typography className = 'title'> Software Engineer</Typography>
                </div>
            </div>


            <figure className = 'profile_image'>
                <img src ={myImage} alt = ""/>
            </figure>

            <div className = 'profile_information'>
                <CustomTimeline/>
                <br></br>
                <button>Button</button>
            </div>
        </div>
    )
}

export default Profile

    