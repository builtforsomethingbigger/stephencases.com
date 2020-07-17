import React from 'react'
import '../../styles/Main.css';
import '../../styles/Bio.css';

export default class Bio extends React.Component{
    render(){
        return(
            <div id="Bio">
                <div className="bio-header">
                    <h1>Hi! My name is Steve. I'm a Full-Stack Developer.</h1>
                </div>
            </div>
        )
    }
}