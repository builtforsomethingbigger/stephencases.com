import React from 'react'
import '../../styles/CMS.css';

export default class CMS extends React.Component{
    render(){
        return(
            <div id="Control" className="fade-in-fx">
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