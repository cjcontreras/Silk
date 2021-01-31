import React from 'react';
import "./Heading.css";

class Heading extends React.Component {

    render() {

        return(
            <div>
                <div></div>
                <div className="img-container">
                    <img src={this.props.jobData.company_logo} className="company-img"/>
                </div>
                <div className="job-title">
                    {this.props.jobData.title}
                </div>
                <div className="job-company">
                    {this.props.jobData.company}
                </div>
            </div>
        )
    }
}

export default Heading;