import React from 'react';
import JobCard from './JobCard';


class CardContainer extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        )
    }
}

export default CardContainer;