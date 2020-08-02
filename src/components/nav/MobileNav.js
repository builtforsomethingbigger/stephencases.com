import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/MobileNav.css';

const MobileNav = (props) => {
    return(
        <nav id="MobileNav" style={{display: props.mobileNav ? "block" : "none"}}>
            <div id="MobileNavMenu">
                <Link to='/' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">BIO</span></Link>
                <Link to='/portfolio' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">PORTFOLIO</span></Link>
                <Link to='/resume' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">RESUME</span></Link>
                <Link to='/contact' onClick={props.hideMobileNav}><span className="mobileNavOptions text-grey">CONTACT</span></Link>
            </div>
            <section id="SocialMediaSection">
                <a href="https://www.linkedin.com/in/stephen-cases/" target="_blank" rel="noopener noreferrer">
                    <i className="linkedin icon"/>
                </a>
                <a href="https://github.com/builtforsomethingbigger" target="_blank" rel="noopener noreferrer">
                    <i className="github icon"/>
                </a>
                <a href="https://twitter.com/B4S_Bigger" target="_blank" rel="noopener noreferrer">
                    <i className="twitter icon"/>
                </a>
                <a href="https://medium.com/@builtforsomethingbigger" target="_blank" rel="noopener noreferrer">
                    <i className="medium icon"/>
                </a>
            </section>

        </nav> 
    )
}
export default MobileNav