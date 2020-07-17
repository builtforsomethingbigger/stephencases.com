import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Nav.css';

const Nav = () => {
    return(
        <div id="Nav">
            <div id="NavMenu">
                <Link to='/bio'><span className="navOptions text-grey">BIO</span></Link>
                <Link to='/portfolio'><span className="navOptions text-grey">PORTFOLIO</span></Link>
                <Link to='/resume'><span className="navOptions text-grey">RESUME</span></Link>
                <span className="navOptions text-grey">CONTACT</span>
            </div>
        </div> 
    )
}
export default Nav