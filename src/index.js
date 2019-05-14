import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Reset from './style'
import Iconfont from './static/iconfont/iconfont'

const Main = () => {
    return (
        <React.Fragment>
            <App />
            <Reset />
            <Iconfont />
        </React.Fragment>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
