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
        <article id="Bio" className="fade-in-fx">
            <div className="bio-body">
                <section>
                    <p className="bio-intro">Hi! I'm Steve and I'm a <span className="full-stack">Full-Stack</span> Developer.</p>
                    <p className="bio-content-skills">
                        <b className="text-blue">let</b>&nbsp;<b className="text-yellow">fullStackDeveloper</b> <b className="text-fushia">={`[`}</b><span className="text-orange">HTML, CSS, JavaScript, ReactJS, Ruby on Rails</span><b className="text-fushia">{`]`}</b>
                    </p>
                </section>
                <div className="slanted-divider"></div>
                <div className="tldr-btn">
                    <p className="tldr-text" onClick={() => expandCard()}>TL;DR</p>
                </div>
                <section className="bio-content-wrapper" style={{display: bioContent}}>
                    <h1 className="bio-intro-about"><s>A Little</s> About Me...</h1>
                    <div className="aBit">QUITE A BIT</div>
                    <p className="bio-content pad-B-50">
                    First and foremost, thank you for visiting my site. I appreciate your time and interest.
                        <br/><br/>
                        I've always been fascinated with Web Development. Though initially pursuing a career in medicine to please my parents, I knew early on that the internet was the way of the future. Little did I know how much it would inevitably change my life.
                        <br/><br/>                    
                        After college, I was working as a Lab Tech in Florida when I decided to take my interest in web development seriously. I taught myself the basics through video tutorials and whatever I could find on w3schools. Before I knew it, I was building simple web pages for my friends and a few personal clients.
                        <br/><br/>                    
                        I eventually decided to take the leap and worked as a Jr. Developer for a digital studio of a well-known ad agency in New York City. I worked on a different project every week, exposing myself to more hands on opportunities with HTML, CSS, and JavaScript. However, the demand for email development grew and I was soon appointed as the sole point of contact for all digital marketing campaigns.
                        <br/><br/>                    
                        I ended up having a fairly successful career in the world of digital marketing. I gained a wealth of experience working for some reputable companies (<i>I won't bore you with the name-drops. You can view my resume page to find out more</i>). Unfortunately, I was laid off just around the time the pandemic hit. 
                        <br/><br/>                    
                        So, what to do? I had several opportunities lined up to continue my career with digital marketing, however, I realized I wasn't truly happy. After weighing my options, I decided to take another leap of faith and enrolled into the Flatiron School's Software Engineering program. For the next fifteen weeks, I was immersed in the world of full-stack development, learning core concepts of object-oriented programming, backend languages and frameworks such as Ruby on Rails, frontend languages and frameworks with JavaScript and ReactJS, along with RESTful APIs and more.
                        <br/><br/>                    
                        Now, I'm ready and eager to start this new career path. With over a decade of frontend development experience, coupled with my new found Software Engineering skills in ReactJS and Ruby on Rails, the sky's the limit!
                        <br/><br/><br/>
                    </p>
                    <br/>
                </section>
                <div className="slant-up-top"></div>
                <section className="status-check">
                    <p className="bio-intro-status">STATUS CHECK:</p>
                    <p className="bio-content neg-pad-20">
                        <b className="text-white">CURRENT AVAILABILITIY:</b>
                    </p>
                    <div className="bio-content pad-L-20">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.8, paddingBottom: 20}}>Entertaining new opportunities to strengthen my skills as a developer.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="bio-content neg-pad-20">
                        <b className="text-white">CURRENTLY WORKING ON:</b>
                    </p>
                    <div className="bio-content pad-L-20">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.8}}>Building small apps that showcase my experience with React Hooks and Redux.<br/>
                                    <i>I will post them to my portfolio so stay tuned!</i></td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.8, paddingBottom: 20}}>Becoming more experienced with the Jest testing framework</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="bio-content neg-pad-20">
                        <b className="text-white">WHAT SWE MEANS TO ME:</b>
                    </p>
                    <div className="bio-content pad-L-20">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.8}}>It's pure creation. From absolutely nothing, I can produce something that could potentially benefit millions (<i>if not billions</i>)!</td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left"  style={{lineHeight: 1.8, paddingBottom: 20}}>It’s staking my claim in the future. Developers are integral in the existence of technologies that advance our society and I feel obliged to contribute to that effort with something that inspires me.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                
                    <p className="bio-content neg-pad-20">
                        <b className="text-white">OTHER INTERESTS:</b>
                    </p>
                    <div className="bio-content pad-L-20">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left" style={{lineHeight: 1.8}}>Emerging technologies like Blockchain/DLT and Headless CMS</td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left" style={{lineHeight: 1.8}}>Photography &amp; Photo editing (<i>purely as a hobby</i>)</td>
                                </tr>
                                <tr>
                                    <td width="10" align="left" valign="top" style={{fontSize: 28, lineHeight: 1.2}}>-&nbsp;</td>
                                    <td align="left" style={{lineHeight: 1.8}}>Playing the same 10 songs on the piano that I committed to memory from watching YouTube tutorials.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <div className="blue-bottom"></div>
        </article>
    )
}
export default Bio