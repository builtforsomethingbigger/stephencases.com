import React from 'react'
import Nav from '../nav/Nav'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import '../../styles/ProfileBanner.css';

const ProfileBanner = () => {

    const [signInBtn, displaySignInBtn] = useState('none')

    const signInSetState = e => {
        if(signInBtn === 'none'){
            displaySignInBtn('block')
        }else{
            displaySignInBtn('none')
        }
    }

    return(
        <div id="ProfileBanner">
            <div className="menuBtn">≡</div>
            <div id="ProfilePicture" onDoubleClick={() => signInSetState()}>
                <Link to='/SignIn'>
                    <div className="signin-btn" style={{display: signInBtn}} onMouseOut={() => signInSetState()}>SIGN IN</div>
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