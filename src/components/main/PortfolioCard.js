import React from 'react'
import {useState} from 'react'
import '../../styles/Portfolio.css';

const PortfolioCard = (props) => {

    const [portfolioInfo, displayPortfolioInfo] = useState('none')

    const expandCard = e => {
        if(portfolioInfo === 'none'){
            displayPortfolioInfo('inline-block')
        }else{
            displayPortfolioInfo('none')
        }
    }

    const [portfolioInfoBtn, displayPortfolioInfoBtn] = useState('inline-block')

    const infoBtnDisplay = e => {
        if(portfolioInfoBtn === 'inline-block'){
            displayPortfolioInfoBtn('none')
        }else{
            displayPortfolioInfoBtn('inline-block')
        }
    }

    return(
        <div className="portfolio-card" onClick={() => {{expandCard(); infoBtnDisplay()}}}>
            <img className="portfolio-preview" src={props.image_url} alt="portfolio-preview" />
            <div className="portfolio-more-info more-info-fx" style={{display: portfolioInfoBtn}}>(click card for more info)</div>
            <div className="bottom-fade"></div>
            <div className="card-info" style={{display: portfolioInfo}}>
                <h1 className="project-title">{props.project_name}</h1>
                <div className="project-info-section">
                    {props.project_description.split('•').map((line, index) => <p key={index} className="info-description-line">{line}</p>)}
                    <p className="line-height-25"><b>GITHUB:&nbsp;</b><a href={props.github_url} target="_blank" rel="noopener noreferrer">{props.github_url}</a><br/>
                        <b>YOUTUBE:&nbsp;</b><a href={props.video_url} target="_blank" rel="noopener noreferrer">{props.video_url}</a>
                    </p>
                </div>
            </div>
        </div>

    )
}
export default PortfolioCard