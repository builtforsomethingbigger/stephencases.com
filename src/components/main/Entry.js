import React from 'react'

const Entry = (props) => {
    return(
        <div>
            <li>
                <div className="timeline-date">
                    <time className="timeline-date-title">{props.start_date}-{props.end_date}</time>
                </div>
                <div className="timeline-date-description">
                    <div className="divider-marker"></div>
                    <div className="entry-description">
                        <h3 className="entry-description-company">{props.company}</h3>
                        <h4 className="entry-description-title">{props.title}</h4>
                        {props.description.split('•').map(line => <p className="entry-description-line">{line}</p>)}<br/><br/>
                    </div>
                </div>
            </li>
        </div>
    )
}
export default Entry