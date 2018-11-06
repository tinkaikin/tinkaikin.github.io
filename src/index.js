import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer清单 from './reducer清单.js';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

let store = createStore(reducer清单);
//只有到这里才能接收到
// console.log(state)
render(
    // <div>
    //     {JSON.stringify(state.getState().v)}
    // </div>
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);


