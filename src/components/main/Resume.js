import React from 'react'
import Entry from './Entry'
import '../../styles/Main.css';
import '../../styles/Resume.css';

 const Resume = (props) => {

    if(!props.entries) return ''

    return(
        <div id="Resume">
            <div className="resume-header">
                <h1>STEPHEN CASES</h1>
                <h4>LOCATION: New York, NY</h4>
            </div>
            <ul>
                {props.entries.map(entry => <Entry key={entry.id} {...entry} /> )}
            </ul>
        </div>
    )
}
export default Resume