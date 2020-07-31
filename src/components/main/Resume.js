import React from 'react'
import Entry from './Entry'
import '../../styles/Resume.css';
import ResumePDF from '../../resume/stephen-cases_resume.pdf'

 const Resume = (props) => {

    const loadData = () => {
        if(!props.entries.length){
            return <div className="loadingData">LOADING DATA...<br/>Thanks for your patience!</div>
        }else{
            return (
                <div className="work-experience">
                    <h2 className="resume-experience">RELATED EXPERIENCE</h2>
                    <ul>
                        {props.entries.map(entry => <Entry key={entry.id} {...entry} /> )}
                    </ul>
                </div>
            )
        }
    }

    return(
        
        <article id="Resume" className="fade-in-fx">
            <div className="dl-resume">
                <a href={ResumePDF} className="resume-btn" download>Download Resume</a><br/>
            </div>
            <div className="resume-header">
                <h1>STEPHEN CASES</h1>
                {/* <p className="resume-subheader">
                    <b>Email:</b>&nbsp;stephen.cases@gmail.com  |  <b>Location:</b>&nbsp;New York, NY
                </p> */}
            </div>
                {loadData()}
            
        </article>
    )
}
export default Resume