import React from 'react';
import Home from './Pages/Home/Home';
import Main from './Pages/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//https://wordsapiv1.p.mashape.com/words/hi

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <switch>
                    <Router>
                        <Route path="/" exact component={Home}/>
                        <Route path="/Main" component={Main}/>
                    </Router>
                </switch>
            </div>
        )
    }
}

export default App;