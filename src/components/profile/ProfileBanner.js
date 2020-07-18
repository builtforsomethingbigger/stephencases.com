import React from 'react'
import Nav from '../nav/Nav'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../../styles/ProfileBanner.css';

const ProfileBanner = () => {

    const showEditBtn = e => {
        return "block"
    }

    return(
        <div id="ProfileBanner">
            <div className="menuBtn">≡</div>
            <div id="ProfilePicture" onDoubleClick={() => showEditBtn()}>
                <Link to='/login'>
                    <div className="signin-btn" style={{display: showEditBtn()}}>SIGN IN</div>
                </Link>
            </div>
            <div id="ProfileInfo">
                <span className="profile-name">Stephen Cases</span>
                <span className="profile-title">Full-Stack Developer</span>
                <Nav />
            </div>
        </div>
    )
}
export default ProfileBanner