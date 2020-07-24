import React from 'react'
import * as emailjs from 'emailjs-com' 
import '../../styles/Contact.css'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          message: "",
          thanks: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm(
            "gmail",
            "template_LIkIY5MD",
            "contact_form",
            "user_lqVtJrLtONwGUqprB1VlH"
        )
        .then()
        .catch()
        this.setState({
            name: "",
            email: "",
            message: "",
            thanks: true
        })

    }

      render(){
        return(
            <div id="ContactPage" className="fade-in-fx">
                <div>
                    <h1 className="contact-header">
                        LET'S KEEP IN TOUCH<br/>
                    </h1>
                    <h2 className="contact-subheader">
                        Drop me a message.<br/>
                        I look forward to hearing from you!
                    </h2>
                </div>
                <div className="conact-form">
                    <form id="contact_form" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="input-full">
                            <label className="contact-label">NAME</label><br/>
                            <input type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="input-full">
                            <label className="contact-label" >EMAIL</label><br/> 
                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="input-full">
                            <label className="contact-label">MESSAGE</label> <br/>
                            <textarea className="msg-input" type="content"
                                id="message"
                                name="message"
                                placeholder="Enter Message"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this)}
                            ></textarea>
                        </div>
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <div className={this.state.thanks ? "thank-you-reponse" : "none"}>
                    Message sent.<br/>
                    I'll respond as soon as I can.
                </div>
            </div>
        )
    }
}
