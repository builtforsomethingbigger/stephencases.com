import React from 'react'
import Nav from '../nav/Nav'
import '../../styles/ProfileBanner.css';

const ProfileBanner = () => {
    return(
        <div id="ProfileBanner">
            <div id="ProfilePicture"></div>
            <div id="ProfileInfo">
                <span className="profile-name">Stephen Cases</span>
                <span className="profile-title">Full-Stack Developer</span>
                {/* <div className="profile-interests">
                    <p className="profile-interests-text">
                    <span className="profile-interests-header">INTERESTS</span><br/>
                        Frontend Development<br/>
                        Blockchain<br/>

                    </p>
                </div> */}
                <Nav />
            </div>
        </div>
    )
}
export default ProfileBanner