import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../styles/Login.css';

const loginAPI = 'http://localhost:3001/login'
export default class Login extends React.Component{

    state = {
        username: '',
        password: '',
        errors: ''
    }

    componentWillMount() {
        return this.props.loggedInStatus ? this.redirect() : null
    }

    onChangeHandler = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        const {username, email, password} = this.state
        let user = {
        username: username,
        password: password
        }
        
        fetch(loginAPI, {user}, {withCredentials: true})
            .then(response => {
            if (response.data.logged_in) {
                this.props.handleLogin(response.data)
                this.redirect()
            } else {
                this.setState({
                errors: response.data.errors
                })
            }
            })
        .catch(error => console.log('api errors:', error))
    };

    redirect = () => {
    this.props.history.push('/')

    // handleErrors = () => {
    //     return (
    //         <div>
    //             <ul>
    //                 {this.state.errors.map(error => {
    //                     return <li key={error}>{error}</li>
    //                 })}
    //             </ul>
    //         </div>
    //     )
    // }
    }

    render(){
        const {username, password} = this.state
        return(
            <div id="LoginPage">
                <div className="login-card">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input 
                                className="login-input" 
                                type="text" 
                                name="username" 
                                value={username} 
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div>
                            <input 
                                className="login-input" 
                                type="password" 
                                name="password" 
                                value={password} 
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <button type="submit" onClick={this.submitHandler}>LOGIN</button>
                    </form>
                    <div>
                        <p className="go-back-text">ARE YOU LOST?<br/>HONEST MISTAKE.</p>
                        <span className="go-back-link">GO BACK</span>
                    </div>
                </div>
                <div className="loginPageFx"></div>
            </div>
        )
    }
}