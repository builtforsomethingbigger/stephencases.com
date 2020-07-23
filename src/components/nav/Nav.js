import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Nav.css';

const Nav = (props) => {

    const displayController = () => {
        if(props.user.username === 'scases82'){
            return <Link to='/cms'><span className="controller">CONTROLLER</span></Link>
        }
    }

    return(
        <div id="Nav">
            <div id="NavMenu">
                <Link to='/bio'><span className="navOptions text-grey">BIO</span></Link>
                <Link to='/portfolio'><span className="navOptions text-grey">PORTFOLIO</span></Link>
                <Link to='/resume'><span className="navOptions text-grey">RESUME</span></Link>
                <Link to='/contact'><span className="navOptions text-grey">CONTACT</span></Link>
                {displayController()}
            </div>
        </div> 
    )
}
export default Nav