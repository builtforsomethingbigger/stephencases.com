import React from 'react'
import PortfolioCard from './PortfolioCard'
import '../../styles/Portfolio.css';

const Portfolio = (props) => {

    return(
        <div id="Portfolio" className="fade-in-fx">
            {props.portfolio.map(portfolio => 
                <PortfolioCard key={portfolio.id}
                    {...portfolio}
                />
            )}
        </div>
    )
}
export default Portfolio