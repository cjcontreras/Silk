import React from 'react';

async function getData() {

	let keyword = this.props.location.state.keywords.split(",");
        console.log(keyword)
	var dict = {};
	keyword.forEach( (element) => {
            const url = `https://jobs.github.com/positions.json?description=${element}&page=1`

            let response = await fetch(url);
            let data = await response.json();
            if (!data.id in dict){
            	dict[data.id] = data;
            }
            continue;



}