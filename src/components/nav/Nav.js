import React from 'react'
import '../../styles/Nav.css';

const Nav = () => {
    return(
        <div id="Nav">
            <div className="portfolio">HOME</div>
            <div id="NavMenu">
                <span className="navOptions">BIO</span>
                <span className="navOptions">RESUME</span>
                <span className="navOptions">CONTACT</span>
            </div>
        </div> 
    )
}
export default Nav