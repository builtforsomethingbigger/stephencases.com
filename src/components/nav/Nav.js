import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Nav.css';

const Nav = (props) => {

    const displayController = () => {
        if(props.user.username === 'scases82'){
            return (
                <div>
                    <Link to='/cms'><span className="controller">CMS CONTROLLER</span></Link>
                </div>
            )
        }
    }

    return(
        <nav id="Nav">
            <div id="NavMenu">
                <Link to='/'><span className="navOptions text-grey">BIO</span></Link>
                <Link to='/portfolio'><span className="navOptions text-grey">PORTFOLIO</span></Link>
                <Link to='/resume'><span className="navOptions text-grey">RESUME</span></Link>
                <Link to='/contact'><span className="navOptions text-grey">CONTACT</span></Link>
            </div>
            <div className="social-header">Let's Connect:</div>
            <section id="SocialMediaSection">
                <a href="https://www.linkedin.com/in/stephen-cases/" target="_blank" rel="noopener noreferrer">
                    <i className="linkedin social-icon"/>
                </a>
                <a href="https://github.com/builtforsomethingbigger" target="_blank" rel="noopener noreferrer">
                    <i className="github social-icon"/>
                </a>
                <a href="https://twitter.com/B4S_Bigger" target="_blank" rel="noopener noreferrer">
                    <i className="twitter social-icon"/>
                </a>
                <a href="https://medium.com/@builtforsomethingbigger" target="_blank" rel="noopener noreferrer">
                    <i className="medium social-icon"/>
                </a>
            </section>
                {displayController()}

        </nav> 
    )
}
export default Nav