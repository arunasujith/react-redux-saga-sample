import React, {Component} from 'react';
import {Provider} from 'react-redux';

import MyStore from './redux/Store'

import './App.css';

import UserComponent from './components/UserComponent'
import UsersListContainer from './components/UsersListContainer'

class App extends Component {
    render() {
        return (
        <Provider store={MyStore.store}>
            <div className="App">
                <UserComponent/>
                <UsersListContainer/>
            </div>
        </Provider>
        );
    }
}

export default App;
