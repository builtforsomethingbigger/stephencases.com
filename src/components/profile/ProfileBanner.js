import React from 'react'
import Nav from '../nav/Nav'
import { useEffect, useState } from 'react'
import '../../styles/ProfileBanner.css';

const ProfileBanner = () => {

    const [x, setX] = useState()
    const [y, setY] = useState()
    useEffect(
        () => {
        const update = (e) => {
            setX(e.x)
            setY(e.y)
        }
        window.addEventListener('mousemove', update)
        window.addEventListener('touchmove', update)
        return () => {
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
        }
        },
        [setX, setY]
    )

    const returnStatement = () => {
        if (x > 215 && x < 235 && y > 125 && y < 133){
            return "block"
        } 
    }

    const showEditBtn = e => {
        return "block"
    }
    
    return(
        <div id="ProfileBanner">
            <div className="menuBtn">≡</div>
            <div id="ProfilePicture" onDoubleClick={() => showEditBtn()}>
                <div>{`x: ${x}; y: ${y};`}<br/>{returnStatement()}</div>
                <div className="signin-btn" style={{display: showEditBtn()}}>SIGN IN</div>
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