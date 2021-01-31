import React from 'react';
import JobCard from './JobCard';
import dataobjects from './dummyData';
import './Main.css';

class Main extends React.Component {

    /*
    //fake data
    state = {
        jobcards: dataobjects
    }
    */

    
    //real data

    state = {
        jobcards: []
    }

    componentDidMount() {
        let keyword;
        if (JSON.stringify(this.props.location.state.keywords) === "[\"python\"]") {
            keyword = this.props.location.state.keywords;
        } else {
            keyword = this.props.location.state.keywords.split(",");
        }
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        keyword.forEach( (element) => {
            const url = `https://jobs.github.com/positions.json?description=${element}&page=1`
 
            fetch(proxyurl + url)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState(
                        { jobcards: data }
                    )
                })
        })
        
    }
    

    render() {
        if (!this.state.jobcards.length) {
            return (
                <div className="loading-logo">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        let jobcards = this.state.jobcards.map( (jobObject) => (
            <div className="col-lg-4 main-card">
                <JobCard jobData={jobObject}/>
            </div>
        ))

        return (
            <div className="row">
                {jobcards}
            </div>
        )

        
    }
}

export default Main;