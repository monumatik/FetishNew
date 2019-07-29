import React from 'react';
import Login from './Login';
import Register from './Register';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			register: false,
			login: true
		}

		this.onClickRegister = this.onClickRegister.bind(this)
	}

	onClickRegister(event){
		this.setState({
			register: true
		})
	}

	render(){

		const { register } = this.state

		return (
			<React.Fragment>
	    		{ !register ? <Login onClickRegister={ this.onClickRegister }/> : <Register/> }
	  		</React.Fragment>
	  	);
	}
	  
}

export default App;
