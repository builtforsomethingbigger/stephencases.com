import React from 'react'
import axios from 'axios'
import '../../styles/Login.css';

const loginAPI = 'http://localhost:3001/sessions'
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    state = {
        username: '',
        password: '',
        loginErrors:''
    }

    goBack(){
        this.props.history.goBack();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state

        axios.post(loginAPI, { 
            user: {
                username: username,
                password: password
            }
        })
        .then(res=> {
            // console.log('res from login', res)
            if(res.data.logged_in){
                window.sessionStorage.setItem('username', username)
                this.props.handleSuccessfulAuth(res.data)
            }
        })
        .catch(error => {
            console.log('login error', error)
        })
        this.goBack()
    }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     const { username, password } = this.state

    //     fetch(loginAPI, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             accept: 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user: {
    //                 username: username,
    //                 password: password
    //             }
    //         })
    //     })
    //     .then(res=> {
    //         console.log('res from login', res)
    //     })
    //     .catch(error => {
    //         console.log('login error', error)
    //     })

    // }
    

    render(){
        return(
            <div id="LoginPage">
                <div className="login-card">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input 
                                    className="login-input" 
                                    type="text" 
                                    name="username" 
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input 
                                    className="login-input" 
                                    type="password" 
                                    name="password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" style={{display: 'none'}}></button>
                        </form>
                    <div>
                        <p className="go-back-text">ARE YOU LOST?<br/>HONEST MISTAKE.</p>
                        <span className="go-back-link" onClick={() => {this.goBack()}}>GO BACK</span>
                    </div>
                </div>
                <div className="loginPageFx"></div>
            </div>
        )
    }
}