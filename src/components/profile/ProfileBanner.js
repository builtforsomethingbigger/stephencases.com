import React from 'react'
import Nav from '../nav/Nav'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import '../../styles/ProfileBanner.css';

const ProfileBanner = () => {

    const [loginBtn, displayLoginBtn] = useState('none')

    const showLogin = e => {
        displayLoginBtn('block')
    }
    const hideLogin = e => {
        displayLoginBtn('none')
    }

    return(
        <div id="ProfileBanner">
            <div className="menuBtn">≡</div>
            <div id="ProfilePicture" onDoubleClick={() => showLogin()}>
                <Link to='/login'>
                    <div className="signin-btn" style={{display: loginBtn}} onMouseOut={() => hideLogin()}>SIGN IN</div>
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