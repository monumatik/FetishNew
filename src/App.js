import React from 'react';
import Login from './Login';
import Register from './Register';
import RemindPassword from './RemindPassword'

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			register: false,
			login: true,
			remindPassword: false
		}

		this.onClickRegister = this.onClickRegister.bind(this)
		this.onClickRemindPassword = this.onClickRemindPassword.bind(this)
	}

	onClickRegister(event){
		this.setState({
			register: true
		})
	}

	onClickRemindPassword(event){
		this.setState({
			remindPassword: true
		})
	}

	render(){

		const { register, remindPassword } = this.state
		return (
			<React.Fragment>
	    		{ !register ? 
	    			!remindPassword ? <Login onClickRemindPassword={ this.onClickRemindPassword } onClickRegister={ this.onClickRegister }/> : <RemindPassword/>
	    		:  <Register/>

	    		}
	  		</React.Fragment>
	  	);
	}
}

export default App;
