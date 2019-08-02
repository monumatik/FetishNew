import React from 'react';
import './Register.css';

class Register extends React.Component {
	constructor(props){
		super(props)
		this.inputTypeLogin = 'text'
		this.inputTypePassword = 'password'
		this.inputTypeEmail = 'email'
		this.host = 'http://localhost:3001'
		
		this.state={
			[ this.inputTypeLogin ]: '',
			[ this.inputTypePassword ]: '',
			[ this.inputTypeEmail ]: '',
			loginError: false,
			infoBoxText: ''
		}

		this.onChangeValue = this.onChangeValue.bind(this)
		this.setStateValue = this.setStateValue.bind(this)
		this.onClickRegister = this.onClickRegister.bind(this)
	}

	onChangeValue(event){
		this.setStateValue(event.target.type, event.target.value)
	}

	setStateValue(inputType, value){
		this.setState({
			[inputType]: value
		})
	}

	setRadioBox(event){
		this.setStateValue(event.target.type, event.target.id)
	}

	onClickRegister(event){
		console.log('heh')
		let login = this.state[this.inputTypeLogin]
		let password = this.state[this.inputTypePassword]
		let email = this.state[this.inputTypeEmail]
		let loginStatus = false
		let passwordStatus = false
		let emailStatus = false

		if(1===1){
			fetch(`${this.host}/register`,
			{
				method: 'POST',
				body: JSON.stringify({
					login: login,
					password: password,
					email: email,
				}),
				headers:{
			    	'Content-Type': 'application/json'
			  	}
			})
			.then(data=>{
				console.log(data.status)
				if(data.status === 200){
					return data.json()
				}else{
					throw Error(data.statusText)
				}
			})
			.then(data=>{
				console.log(data)
				if(data.error !== null){
					this.setState({
						loginError: true,
						infoBoxText: data.error
					})
				}else{
					this.setState({
						loginError: false,
						infoBoxText: data.data
					})
				}
			})
			.catch(err=>console.log(err))

		}else{
			alert('ni chuja')
		}
	}

	render() {

		const { text, password, email, loginError, infoBoxText } = this.state

		return (
			<React.Fragment>
				<div className="register-background"/>
				<div className="register-flex-container">
					<div className="register-container">
						<img className="register-img-logo" src="logo.png" alt="logo"/>
						<div className="register-input-container-center">
							<div className="register-inputs">
								{ infoBoxText !== '' ?
									<div className={ loginError ? 'infoBox-Error' : 'infoBox' }>
									{ infoBoxText }
									</div>
								: <div/> }
								<input type={ this.inputTypeLogin } onChange={ this.onChangeValue } value={ text } placeholder="Login"/>
								<input type={ this.inputTypePassword } onChange={ this.onChangeValue } value={ password } placeholder="Hasło"/>
								<input type={ this.inputTypeEmail } onChange={ this.onChangeValue } value={ email } placeholder="E-mail"/>
							</div>
						</div>
						<div className="register-button-container-center">
							<div className="register-buttons">
								<button type="register" onClick={ this.onClickRegister }>Rejestracja</button>
							</div>
						</div>
						<div className="register-flex-info">
							<a href="url" >Klikając przycisk "Rejestracja" akceptujesz nasz Regulamin.</a>
						</div>
						<br/>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Register;