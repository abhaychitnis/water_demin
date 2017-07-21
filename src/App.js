import React, { Component } from 'react';
//import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

//import { Header } from './components/common';
//import TopDashboard from './components/TopDashboard';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD1nhIYyL1wK6PcQVNb_REKpoIWfYjH62o',
      authDomain: 'auth-b9451.firebaseapp.com',
      databaseURL: 'https://auth-b9451.firebaseio.com',
      storageBucket: 'auth-b9451.appspot.com',
      messagingSenderId: '557338489070'
      };

      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
