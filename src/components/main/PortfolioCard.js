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
        <section className="portfolio-card" onClick={() => {{expandCard(); infoBtnDisplay()}}}>
            <img className="portfolio-preview" src={props.image_url} alt="portfolio-preview" />
            <div className="portfolio-more-info more-info-fx" style={{display: portfolioInfoBtn}}>(click card for more info)</div>
            <div className="bottom-fade"></div>
            <div className="card-info" style={{display: portfolioInfo}}>
                <h1 className="project-title">{props.project_name}</h1>
                <div className="project-info-section">
                    {props.project_description.split('•').map((line, index) => <p key={index} className="info-description-line">{line}</p>)}
                </div>
                <div className="resource-link-container">
                    <a className="resource-link" href={props.github_url} target="_blank" rel="noopener noreferrer">GITHUB</a>
                </div>
                {props.video_url ?                 
                    <div className="resource-link-container">
                        <a className="resource-link" href={props.video_url} target="_blank" rel="noopener noreferrer">VIDEO DEMO</a>
                    </div>
                    :
                    ''
                }
            </div>
        </section>
    )
}
export default PortfolioCard