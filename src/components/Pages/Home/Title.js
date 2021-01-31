import React from 'react';
import './Title.css';

class Title extends React.Component {
    render() {
        return(
            <div>
                <h1 className="header">Welcome to Silk.</h1>
                <h2 className="sub-header">Lets start off by tagging some of your skills.</h2>
            </div>
        )
    }
}

export default Title;