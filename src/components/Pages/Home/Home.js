import React from 'react';
import Header from './Title';
import Searchbar from './Searchbar';
import Title from './Title';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <div>
                    <Searchbar />
                </div>
            </div>
        )
    }
}

export default Home;