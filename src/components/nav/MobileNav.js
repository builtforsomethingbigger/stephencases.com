import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/MobileNav.css';

const MobileNav = (props) => {
    return(
        <div id="MobileNav" style={{display: props.mobileNav ? "block" : "none"}}>
            <div id="MobileNavMenu">
                <Link to='/' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">BIO</span></Link>
                <Link to='/portfolio' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">PORTFOLIO</span></Link>
                <Link to='/resume' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">RESUME</span></Link>
                <Link to='/contact' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">CONTACT</span></Link>
            </div>
        </div> 
    )
}
export default MobileNav