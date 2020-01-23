import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetNotes } from './actions/notes';
import { startSetCategories } from './actions/category'
import { startGetUser } from './actions/user'

const store = configureStore()
console.log(store.getState())
store.subscribe(()=>
{
    console.log(store.getState())
})

if(localStorage.getItem('authToken'))
{
    store.dispatch(startSetNotes())
    store.dispatch(startSetCategories())
    store.dispatch(startGetUser())
}

const ele = (
    <Provider store = { store }>
        <App/>
    </Provider>
)

ReactDOM.render(ele , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
