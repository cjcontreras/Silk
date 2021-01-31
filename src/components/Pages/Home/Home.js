import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Searchbar />
                </div>
            </div>
        )
    }
}

export default Home;