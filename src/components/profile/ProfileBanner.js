import React from 'react'
import '../../styles/ProfileBanner.css';

const ProfileBanner = () => {
    return(
        <div id="ProfileBanner">
            <div id="ProfilePicture"></div>
            <div id="ProfileInfo">
                <span className="profileName">Stephen Cases</span>
            </div>
        </div>
    )
}
export default ProfileBanner