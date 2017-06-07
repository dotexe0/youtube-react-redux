// create new component that will produce html
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAd8PgOnrQ0JMcXu0p6mLOPGY6xf4y9MZ8';


const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


//take this component's generated html and render it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));