import React from 'react';
import Searchbar from './Searchbar';
import Header from './Header';

class App extends React.Component {
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

export default App;