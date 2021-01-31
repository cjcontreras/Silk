import React from 'react';
import Heading from './Heading';
import './JobCard.css';

class JobCard extends React.Component {

    componentDidMount() {
        //console.log(this.props.jobData)
        //console.log(this.props.jobData.title)
        //console.log(this.props.jobData.company)
    }

    render() {
        return(
            <div className="job-card-box">
                <div class="box1">
                    <Heading 
                        jobData={this.props.jobData}
                    />
                    <div className="learn-more-btn">
                        <a href={this.props.jobData.url}>Learn More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobCard;