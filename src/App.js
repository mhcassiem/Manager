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
