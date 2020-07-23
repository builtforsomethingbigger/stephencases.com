import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/Home.css';

const Home = (props) => {
    const [x, setX] = useState()
    const [y, setY] = useState()
    useEffect(
        () => {
        const update = (e) => {
            setX(e.x)
            setY(e.y)
        }
        window.addEventListener('mousemove', update)
        window.addEventListener('touchmove', update)
        return () => {
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
        }
        },
        [setX, setY]
    )

    const returnStatement = () => {
        if (x > 500 && x < 800 && y > 500 && y < 800){
            return "YOU FOUND THE EASTER EGG!"
        } 
    }

    return(
        <div id="HomePage">
            <div className="home-container">
                <h1>WELCOME TO MY PROFESSIONAL PORTFOLIO!</h1>
                <h2>{`x: ${x}; y: ${y};`}</h2>
                <h3>{returnStatement()}</h3>
                <h2>Status: {props.loggedInStatus}</h2>
            </div>
        </div>
    )
}
export default Home