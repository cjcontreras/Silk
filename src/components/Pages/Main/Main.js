import React from 'react';
import JobCard from './JobCard';

class Main extends React.Component {
    
    state = {
        jobcards: []
    }

    componentDidMount() {
        let keyword = this.props.location.state.keywords.split(",");
        console.log(keyword)
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
            return <div>hi</div>;
        }

        let jobcards = this.state.jobcards.map( (jobObject) => (
            <JobCard jobData={jobObject}/>
        ))

        return (
            <div>
                {jobcards}
            </div>
        )

        
    }
}

export default Main;