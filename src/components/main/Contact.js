import React from 'react'
import '../../styles/Contact.css'

export default class Contact extends React.Component {
    
constructor(props) {
    super(props);
this.state = {
        name: "",
        email: "",
        feedback: "",
    };
}
handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
this.setState({ [name]: value });
    
}

    render(){
        return(
            <div id="ContactPage">
                <div className="conact-form">
                    <div className="input-half">
                        <label className="contact-label">NAME:</label> <input type="text"></input>
                    </div>
                    <div className="input-half">
                        <label className="contact-label">EMAIL:</label> <input type="text"></input>
                    </div>
                    <div className="input-full">
                        <label className="contact-label">SUBJECT:</label> <input type="text"></input>
                    </div>
                </div>
            </div>
        )
    }
}
