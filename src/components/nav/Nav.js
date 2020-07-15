import React from 'react'
import '../../styles/Nav.css';

const Nav = () => {
    return(
        <div id="Nav">
            <div id="NavMenu">
                <span className="navOptions text-grey">BIO</span>
                <span className="navOptions text-grey">PORTFOLIO</span>
                <span className="navOptions text-grey">RESUME</span>
                <span className="navOptions text-grey">CONTACT</span>
            </div>
        </div> 
    )
}
export default Nav