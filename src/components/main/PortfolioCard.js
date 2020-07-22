import React from 'react'
import {useState} from 'react'
import '../../styles/Portfolio.css';
import PortfolioPreview from '../../images/chance-preview.jpg'

const PortfolioCard = (props) => {

    const [portfolioInfo, displayPortfolioInfo] = useState('none')

    const expandCard = e => {
        if(portfolioInfo === 'none'){
            displayPortfolioInfo('inline-block')
        }else{
            displayPortfolioInfo('none')
        }
    }

    return(
        <div className="portfolio-card" onClick={() => expandCard()}>
            <img className="portfolio-preview" src={PortfolioPreview} alt="portfolio-preview" />
            <div className="card-info" style={{display: portfolioInfo}}>
                <h1>{props.project_name}</h1>
                {props.project_description.split('•').map((line, index) => <p key={index} className="info-description-line">{line}</p>)}<br/><br/>
            </div>
        </div>

    )
}
export default PortfolioCard