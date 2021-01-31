import React from 'react';
import './Searchbar.css';
import Tagify from '@yaireo/tagify';
import '@yaireo/tagify/dist/tagify.css';
import { Link } from 'react-router-dom';


class Searchbar extends React.Component {

    state = { keywords: "python" }

    // input tags https://github.com/yairEO/tagify#ajax-whitelist
    inputTag() {
        let input = document.querySelector('input[type=text]')
        let tagify = new Tagify(input, {
            originalInputValueFormat: valuesArr => valuesArr.map(item => item.value).join(','),
            whitelist: ["Python", "Java", "C++", "SQL", "Javascript", "Web Development", "MongoDB", "CSS", "HTML"],
        })

        input.addEventListener('change', (e) => {
            console.log(e.target.value);
            this.setState({ keywords: e.target.value });
        })
    }
    
    componentDidMount() {
        this.inputTag();
    }

    render() {
        return (
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <form className="form-search">
                    <input type="text" className="input-search"></input>
                    <Link to={{
                        pathname: "/Main",
                        state: { keywords: this.state.keywords }
                    }}>
                        <button className="submit-btn" type="submit">
                            <div className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </div> 
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Searchbar;