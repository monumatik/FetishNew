import React from 'react';
import './Login.css';

class Login extends React.Component {
	constructor(props){
		super(props)
		this.loginOrEmail = 'text'
		this.password = 'password'
		this.host = 'http://localhost:3001'
		
		this.state = {
			[this.loginOrEmail]: '',
			[this.password]: '',
			loginError: false,
			infoBoxText: '',
		}
		this.onChangeValue = this.onChangeValue.bind(this)
		this.onClickLogin = this.onClickLogin.bind(this)
	}

	onChangeValue(event){
		this.setStateValue(event.target.type, event.target.value)
	}

	setStateValue(inputType, value){
		this.setState({
			[inputType]: value.replace(' ', '')
		})
	}

	onClickLogin(){
		let login = this.state[this.loginOrEmail]
		let password = this.state[this.password]

		console.log(`${this.host}/login`)

		fetch(`${this.host}/login`,
			{
				method: 'POST',
				body: JSON.stringify({
					login: login,
					password: password
				}),
				headers:{
			    	'Content-Type': 'application/json'
			  	}
			})
			.then(data=>{
				if(data.status === 200){
					return data.json()
				}else{
					throw Error(data.statusText)
				}
			})
			.then(data=>{
				if(data.error !== null){
					this.setState({
						loginError: true,
						infoBoxText: data.error
					})
				}else{
					this.props.onLogin({
						token: data.data
					})
				}
			})
			.catch(err=>console.log(err))
	}

	render() {
		const { loginError, infoBoxText } = this.state

		return (
			<React.Fragment>
				<div className="login-background"/>
				<div className="login-flex-container">
					<div className="login-container">
						<img className="login-img-logo" src="logo.png" alt="logo"/>
						<div className="login-input-container-center">
							<div className="login-inputs">
								{ infoBoxText !== '' ?
									<div className={ loginError ? 'infoBox-Error' : 'infoBox' }>
									{ infoBoxText }
									</div>
								: <div/> }
								<input type={ this.loginOrEmail } onChange={ this.onChangeValue } placeholder="Login lub e-mail"/>
								<input type={ this.password } onChange={ this.onChangeValue } placeholder="Hasło"/>
							</div>
						</div>
						<div className="login-button-container-center">
							<div className="login-buttons">
								<button type="login" onClick={ this.onClickLogin }>Zaloguj</button>
								<button onClick={ this.props.onClickRegister } type="register">Rejestracja</button>
							</div>
						</div>
						<div className="login-flex-forgotten-password">
							<a onClick={ this.props.onClickRemindPassword }>Nie pamiętasz hasła?</a>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}



export default Login;