import React from 'react'
import '../../styles/Bio.css';

 const Bio = () => {
    return(
        <div id="Bio" className="fade-in-fx">
            <div className="bio-header">
                <p className="bio-intro">Hi! I'm Steve and I'm a <span className="full-stack">Full-Stack</span> Developer.</p>
            </div>
            <div className="bio-body">
                <h2>A Little About Me...</h2>
                <p className="bio-content">First and foremost, thank you for visiting my site. I appreciate your time and presence.</p>
                <p className="bio-content">But I'm really into the flexibility that frontend has to offer... especially with JavaScript and frontend frameworks like ReactJS.</p>
                <p className="bio-content">Other interests include:</p>
                <p className="bio-content pad-L-20">- Blockchain &amp; Distributed Ledger Technology</p>
                <p className="bio-content pad-L-20">- Photography and Photo Editing</p>
            </div>
        </div>
    )
}
export default Bio