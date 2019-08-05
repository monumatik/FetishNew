import React from 'react';
import './Login.css';

class Login extends React.Component {
	constructor(props){
		super(props)

	
	}


	render() {
		return (
			<React.Fragment>
				<div className="login-background"/>
				<div className="login-flex-container">
					<div className="login-container">
						<img className="login-img-logo" src="logo.png" alt="logo"/>
						<div className="login-input-container-center">
							<div className="login-inputs">
								<input type="text" placeholder="Login"/>
								<input type="password" placeholder="Hasło"/>
							</div>
						</div>
						<div className="login-button-container-center">
							<div className="login-buttons">
								<button type="login">Zaloguj</button>
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