/** @format */
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App/App';
import init from './initialize';

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

init();

render();
