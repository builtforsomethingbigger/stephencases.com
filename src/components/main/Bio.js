import React from 'react'
import '../../styles/Main.css';

export default class Bio extends React.Component{
    render(){
        return(
            <div id="Bio">
                <ul>
                    <li>
                        <div>
                            <time className="timeline-title">NOW</time>
                        </div>
                        <div>
                            Looking for new opportunities to strengthen my SWE skillset.
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}