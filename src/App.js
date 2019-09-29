import React from 'react';
import Login from './Login';
import Register from './Register';
import RemindPassword from './RemindPassword'
import Main from './Main';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			register: false,
			logged: false,
			remindPassword: false,
			token: ''
		}

		this.onClickRegister = this.onClickRegister.bind(this)
		this.onClickRemindPassword = this.onClickRemindPassword.bind(this)
		this.onLogin = this.onLogin.bind(this)
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

	onLogin(object){
		this.setState({
			token: object.token,
			logged: true
		})
	}

	render(){

		const { register, remindPassword, logged, token } = this.state
		return (
			<React.Fragment>
	    		{ !register ? 
	    			!remindPassword ? !logged ? <Login onClickRemindPassword={ this.onClickRemindPassword } onClickRegister={ this.onClickRegister } onLogin={ this.onLogin }/> : <Main token={ token }/> : <RemindPassword/>
	    		:  <Register/>

	    		}
	  		</React.Fragment>
	  	);
	}
}

export default App;
