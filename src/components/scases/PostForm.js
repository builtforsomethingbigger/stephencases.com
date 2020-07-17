import React from 'react'
import '../../styles/PostForm.css';

export default class PostForm extends React.Component{
    render(){
        return(
            <div id="PostForm">
                <div>
                    <select>
                        <option default>Sir, what would you like to </option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
        )
    }
}