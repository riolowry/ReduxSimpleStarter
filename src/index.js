import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDb_F-loqZsI9WpHZueeYtDggJ3M9Mu1sc';



// Create a new component to produce some html
class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: []};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render(){
		console.log(this.state);
		return (
			<div>
			  <SearchBar />
			</div>
		);
	}
}

// insert component into the dom
ReactDOM.render(<App />, document.querySelector('.container'));