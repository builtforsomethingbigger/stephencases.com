import React from 'react'
import '../../styles/Login.css';

export default class Login extends React.Component{

    state = {
        username: '',
        password: ''
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
    }

    render(){
        return(
            <div id="LoginPage">
                <div className="login-card">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input 
                                className="login-input" 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div>
                            <input 
                                className="login-input" 
                                type="password" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.onChangeHandler}
                            />
                        </div>
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