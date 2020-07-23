import React from 'react'
import '../../styles/Bio.css';

 const Bio = () => {
    return(
        <div id="Bio" className="fade-in-fx">
            {/* <div className="bio-header">
            </div> */}
            <div className="bio-body">
                <p className="bio-intro">Hi! I'm Steve and I'm a <span className="full-stack">Full-Stack</span> Developer.</p>
                <h2>A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lot About Me...&nbsp;&nbsp;&nbsp;<span className="tldr-btn">TL;DR</span></h2>
                <div className="little-strike"><s>Little</s></div>
                <div className="bio-content-wrapper">
                    <p className="bio-content">
                        First and foremost, thank you for visiting my site. I appreciate your time and interest.
                        <br/><br/>                    
                        I've always been fascinated with Web Devlopment. Though initially pursuing a career in medicine to please my parents, I knew early on that the internet was the way of the future. Little did I know how much it would inevitably change my life.
                        <br/><br/>                    
                        After college, I was working as a Lab Tech in Florida when I decided to take web development seriously. I taught myself the basics through video tutorials and whatever I could find on w3schools. Before I knew it, I was building simple web pages for my friends and a few personal clients.
                        <br/><br/>                    
                        I eventually decided to take the leap and worked as a Jr. Developer for a digital studio of a well-known ad agency in New York City. The pay wasn't great but the experience was worth it. I worked on a different project every week, exposing myself to more hands on opportunites with HTML, CSS, and JavaScript. However, as the demand for email development grew, I was quickly appointed as the sole point of contact for all digital marketing campaigns.
                        <br/><br/>                    
                        I ended up having a fairly successful career in the niche world of digital marketing. I gained a wealth of experience working for some well-known companies (<i>I won't bore you with the name-drops. You can just view my resume page</i>). Unfortunately, I was laid off just around the time the pandemic hit. 
                        <br/><br/>                    
                        So, what to do? I had several opportunites lined up to continue my career with digital marketing, however, something didn't quite add up when I thought about my overall happiness with the career path I chose. After weighing my options, I decided to take another leap of faith and enrolled into the Flatiron School's Software Engineering program. For the next hundred-plus days, I was immersed in the world of full-stack development - learning core concepts of object-oriented programming, backend languages and frameworks such as Ruby on Rails, frontend languages and frameworks like JavaScript and ReactJS, as well as RESTful API and more!
                        <br/><br/>                    
                        Now, I'm ready and eager to start this new career path. Having over a decade of experience with frontend development, coupled with my new found skills with software engineering, I feel that the sky's the limit!
                    </p>
                    <br/>
                </div>
                <h1 className="bio-intro">21 QUESTIONS:</h1>
                <p className="bio-content">
                    <b>What do I love about Software Engineering?</b>
                </p>
                <p className="bio-content pad-L-20">
                    - It's pure creation. You literally turn a blank page into something that can potentially be used by millions (<i>if not billions</i>)!
                </p>
                <p className="bio-content">
                    <b>Other interests include:</b>
                </p>
                <p className="bio-content pad-L-20">
                    - Blockchain &amp; Distributed Ledger Technology<br/>
                    - Photography and Photo Editing
                </p>
            </div>
        </div>
    )
}
export default Bio