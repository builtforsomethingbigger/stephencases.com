import React from 'react'
import Entry from './Entry'
import axios from 'axios'
import '../../styles/Main.css';
import '../../styles/Resume.css';

const resumeAPI = 'http://localhost:3001/resumes'
export default class Resume extends React.Component{

    state = {
        resumes: []
    }

    componentDidMount(){
        this.fetchResumes()
    }

    fetchResumes = () => {
        fetch(resumeAPI)
        .then(res=>res.json())
        .then(resumes => this.setState({ resumes }))
    }

    render(){
        console.log(this.state.resumes)
        if(!this.state.resumes) return ''
        return(
            <div id="Resume">
                <div className="resume-header">
                    <h1>STEPHEN CASES</h1>
                    <p>New York, NY</p>
                </div>
                <ul>
                    {this.state.resumes.map(entry => <Entry key={entry.id} {...entry} /> )}
               </ul>
            </div>
        )
    }
}