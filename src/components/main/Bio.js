import React from 'react'
import {useState} from 'react'
import '../../styles/Bio.css';

 const Bio = () => {

    const [bioContent, bioContentDisplay] = useState ('block')

    const expandCard = e => {
        if(bioContent === 'block'){
            bioContentDisplay('none')
        }else{
            bioContentDisplay('block')
        }
    }

    return(
        <div id="Bio" className="fade-in-fx">
            {/* <div className="bio-header">
            </div> */}
            <div className="bio-body">
                <p className="bio-intro">Hi! I'm Steve and I'm a <span className="full-stack">Full-Stack</span> Developer.</p>
                <p className="bio-content-skills">
                    <b className="text-blue">let</b>&nbsp;<b className="text-yellow">fullStackDeveloper</b>&nbsp;<b className="text-fushia">= {`[`}</b>&nbsp;<span className="text-orange">HTML, CSS, JavaScript, ReactJS, Ruby on Rails</span><b className="text-fushia">{`]`}</b>
                </p>
                <div className="tldr-btn" onClick={() => expandCard()}>
                    <p className="tldr-text">TL;DR</p>
                </div>
                <div className="bio-content-wrapper" style={{display: bioContent}}>
                    <h1 className="bio-intro-status"><s>A Little</s> About Me...</h1>
                    <div className="aBit">QUITE A BIT</div>
                    <p className="bio-content">
                        First and foremost, thank you for visiting my site. I appreciate your time and interest.
                        <br/><br/>
                        I've always been fascinated with Web Devlopment. Though initially pursuing a career in medicine to please my parents, I knew early on that the internet was the way of the future. Little did I know how much it would inevitably change my life.
                        <br/><br/>                    
                        After college, I was working as a Lab Tech in Florida when I decided to take web development seriously. I taught myself the basics through video tutorials and whatever I could find on w3schools. Before I knew it, I was building simple web pages for my friends and a few personal clients.
                        <br/><br/>                    
                        I eventually decided to take the leap and worked as a Jr. Developer for a digital studio of a well-known ad agency in New York City. I worked on a different project every week, exposing myself to more hands on opportunites with HTML, CSS, and JavaScript. However, as the demand for email development grew, I was quickly appointed as the sole point of contact for all digital marketing campaigns.
                        <br/><br/>                    
                        I ended up having a fairly successful career in the niche world of digital marketing. I gained a wealth of experience working for some reputable companies (<i>I won't bore you with the name-drops. You can view my resume page to find out more</i>). Unfortunately, I was laid off just around the time the pandemic hit. 
                        <br/><br/>                    
                        So, what to do? I had several opportunites lined up to continue my career with digital marketing, however, I realized I wasn't truly happy. After weighing my options, I decided to take another leap of faith and enrolled into the Flatiron School's Software Engineering program. For the next hundred-plus days, I was immersed in the world of full-stack development - learning core concepts of object-oriented programming, backend languages and frameworks such as Ruby on Rails, frontend languages and frameworks with JavaScript and ReactJS, as well as RESTful API and more.
                        <br/><br/>                    
                        Now, I'm ready and eager to start this new career path. Having over a decade of experience with frontend development, coupled with my new found skills with software engineering, I feel that the sky's the limit!
                        <br/><br/><br/>
                    </p>
                    <br/>
                </div>
                <div className="status-check">
                    <p className="bio-intro-status">Status Check:</p>
                    <p className="bio-content">
                        <b className="text-blue">Employment Status</b>
                    </p>
                    <div className="bio-content pad-L-20">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.3}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.5, paddingBottom: 20}}>Currently entertaining new opportunities to grow as a Software Engineer.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="bio-content pad-T-20">
                        <b className="text-blue">What are you currently working on?</b>
                    </p>
                    <div className="bio-content pad-L-20">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.3}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.5}}>Building out small apps that showcase my understanding of React 16 Hooks and Redux.<br/>
                                    <i>I will post them to my portfolio so stay tuned!</i></td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.3}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.5, paddingBottom: 20}}>Learning more about the JestJS Testing Framework</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="bio-content pad-T-20">
                        <b className="text-blue">What do I love about Software Engineering?</b>
                    </p>
                    <div className="bio-content pad-L-20">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.3}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.5}}>It's pure creation. From absolutely nothing, I can produce something that could potentially benefit millions (<i>if not billions</i>)!</td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.3}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.5, paddingBottom: 20}}>It’s claiming my stake in the future. Developers are integral in the existence of technologies that advance our society and I feel obliged to contribute to that effort with something that inspires me.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                
                    <p className="bio-content pad-T-20">
                        <b className="text-blue">Other interests include:</b>
                    </p>
                    <div className="bio-content pad-L-20 pad-B-200">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.5}}>-&nbsp;</td>
                                    <td align="left">Blockchain &amp; Distributed Ledger Technology</td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.5}}>-&nbsp;</td>
                                    <td align="left">Crypto Currency and ForEx Trading</td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.5}}>-&nbsp;</td>
                                    <td align="left">Photography and Photo Editing</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bio