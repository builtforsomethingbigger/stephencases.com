import React from 'react'
import Nav from '../nav/Nav'
import '../../styles/ProfileBanner.css';

const ProfileBanner = () => {
    return(
        <div id="ProfileBanner">
            <div className="menuBtn">≡</div>
            <div id="ProfilePicture">
                <div className="signin-btn">SIGN IN</div>
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