import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import 'firebase/auth';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  
	componentDidMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyB04RkXXMv2aRlCVYRTx0CaFSlPOttiL-A',
			authDomain: 'manager-6ad55.firebaseapp.com',
			databaseURL: 'https://manager-6ad55.firebaseio.com',
			projectId: 'manager-6ad55',
			storageBucket: 'manager-6ad55.appspot.com',
			messagingSenderId: '182830996762'
		});
	}

	render() {
		return (                                                    
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
