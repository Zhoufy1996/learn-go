/** @format */
import { hot } from 'react-hot-loader/root';
import ReactDOM from 'react-dom';
import React from 'react';
import init from './initialize';
import App from './App/App';

init();

declare const module: any;

const HotApp = hot(App);

const render = () => {
    ReactDOM.render(<HotApp />, document.getElementById('root'));
};

render();

if (module.hot) {
    module.hot.accept('./App/App.tsx', () => {
        /* eslint-disable no-console */
        console.log('热更新');
        render();
    });
}
