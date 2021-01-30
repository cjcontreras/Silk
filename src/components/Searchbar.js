import React from 'react';
import './styling/Searchbar.css';
import Tagify from '@yaireo/tagify';
import '@yaireo/tagify/dist/tagify.css';

//<input class="searchinput" type="text" placeholder="Search.." name="search"/>

class Searchbar extends React.Component {

    inputTag() {
        let input = document.querySelector('input[type=text]')
        let tagify = new Tagify(input, {
            whitelist: ["hello, test, 123"],
            blacklist: ["no", "yes", "maybe"]
        })
        input.style.setProperty('--tag--min-width', '100px');
    }
    
    componentDidMount() {
        this.inputTag();
        //document.getElementsByClassName('tagify').style.setProperty('--tag--max-width', '80px');
    }

    render() {
        return (
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <form className="form-search" action="/action_page.php">
                    <input type="text" className="input-search"></input>
                        <button className="submit-btn" type="submit">
                            <div className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </div> 
                        </button>
                </form>
            </div>
        )
    }
}

export default Searchbar;