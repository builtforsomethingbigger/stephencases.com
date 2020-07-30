import React from 'react'
import PortfolioCard from './PortfolioCard'
import '../../styles/Portfolio.css';

const Portfolio = (props) => {

    const loadData = () => {
        if(!props.portfolio){
            return <div>LOADING DATA...</div>
        }else{
            return(props.portfolio.map(portfolio => 
                <PortfolioCard key={portfolio.id}
                    {...portfolio}
                />
            ))
        }
    }
    return(
        <div id="Portfolio" className="fade-in-fx">
            <h1 className="portfolio-header">MY PORTFOLIO</h1>
            {loadData()}
        </div>
    )
}
export default Portfolio