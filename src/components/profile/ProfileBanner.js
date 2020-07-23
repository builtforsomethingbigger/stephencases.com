import React from 'react'
import Nav from '../nav/Nav'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import '../../styles/ProfileBanner.css';

const ProfileBanner = (props) => {

    const [logInBtn, displayLogInBtn] = useState('none')

    const LogInSetState = e => {
        if(logInBtn === 'none'){
            displayLogInBtn('block')
        }else{
            displayLogInBtn('none')
        }
    }

    return(
        <div id="ProfileBanner">
            <div className="menuBtn">≡</div>
            <div id="ProfilePicture" onDoubleClick={() => LogInSetState()}>
                <Link to='/login'>
                    <div className="login-btn" style={{display: logInBtn}} onMouseOut={() => LogInSetState()}>LOGIN</div>
                </Link>
            </div>
            <div id="ProfileInfo">
                <span className="profile-name">Stephen Cases</span>
                <span className="profile-title">Full-Stack Developer</span>
                <Nav user={props.user}/>
            </div>
        </div>
    )
}
export default ProfileBanner