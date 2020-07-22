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

    return(
        <div className="portfolio-card" onClick={() => expandCard()}>
            <img src="https://drive.google.com/file/d/1aGK9msxQLJ7kL8Knn1MFsg7lIKaJXgqM/view?usp=sharing" />
            <div className="card-info" style={{display: portfolioInfo}}></div>
        </div>

    )
}
export default PortfolioCard