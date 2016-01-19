import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDb_F-loqZsI9WpHZueeYtDggJ3M9Mu1sc';

// Create a new component to produce some html
const App = () => {
	return (
		<div>
		  <SearchBar />
		</div>
	);
}

// insert component into the dom
ReactDOM.render(<App />, document.querySelector('.container'));