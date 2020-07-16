import React from 'react'
import '../../styles/Portfolio.css';

export default class Portfolio extends React.Component{
    render(){
        return(
            <div id="Portfolio">
                <div className="card-row">
                    <div className="portfolio-card"></div>
                    <div className="portfolio-card"></div>
                </div>
                <div className="card-row">
                    <div className="portfolio-card"></div>
                    <div className="portfolio-card"></div>
                </div>
                <div className="card-row">
                    <div className="portfolio-card"></div>
                    <div className="portfolio-card"></div>
                </div>
            </div>
        )
    }
}