import React from 'react';
import logo from './Silk-logo.png';
import './Header.css';
import Nav from './Nav';


class Header extends React.Component {
    render() {
        return(
            <div className="header-container">
                <div className="nav-container">
                    <div>
                        <img src={logo} className="silk-img"></img>
                    </div>
                    <div>
                        <Nav />
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Header;