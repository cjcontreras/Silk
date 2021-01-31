import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    render() {
        return (
            <div className="nav-container">

                <Link to={{
                    pathname: "/",
                }}>
                    <div className="nav-element"><a>Home</a></div>
                </Link>
            
                <Link to={{
                    pathname: "/Main",
                    state: { keywords: "Python" }
                }}>
                    <div className="nav-element"><a>Jobs</a></div>
                </Link>
            </div>
        )
    }
}

export default Nav;