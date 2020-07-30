import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Nav.css';

const Nav = (props) => {

    const displayController = () => {
        if(props.user.username === 'scases82'){
            return <Link to='/cms'><span className="controller">CMS CONTROLLER</span></Link>
        }
    }

    return(
        <nav id="Nav">
            <div id="NavMenu">
                <Link to='/'><span className="navOptions text-grey">BIO</span></Link>
                <Link to='/portfolio'><span className="navOptions text-grey">PORTFOLIO</span></Link>
                <Link to='/resume'><span className="navOptions text-grey">RESUME</span></Link>
                <Link to='/contact'><span className="navOptions text-grey">CONTACT</span></Link>
                {displayController()}
            </div>
        </nav> 
    )
}
export default Nav