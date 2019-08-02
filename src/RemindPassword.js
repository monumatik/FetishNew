import React from 'react';
import styled from 'styled-components';

const Remind = styled.button`
	padding:10px; 
    border: 1px solid #0109B5; 
    margin: 5px 1px 3px 0px;
    outline: none;
    background-color: #0109B5;
    color: white;
    -webkit-border-radius: 10px;
    -webkit-transition: all 0.10s ease-in-out;
	-moz-transition: all 0.10s ease-in-out;
	-ms-transition: all 0.10s ease-in-out;
	-o-transition: all 0.10s ease-in-out;
		
	&:hover {
		box-shadow: 0 0 5px #0109B5;
	}
`;

class RemindPassword extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			infoBoxText: '',
			email: ''
		}
		this.host = 'http://localhost:3001/resetlink'

		this.onClickRemind = this.onClickRemind.bind(this)
		this.emailOnChange = this.emailOnChange.bind(this)
	}

	onClickRemind(){
		fetch(`${this.host}`,
			{
				method: 'POST',
				body: JSON.stringify({
					email: this.state.email,
				}),
				headers:{
			    	'Content-Type': 'application/json'
			  	}
			})
			.then(data=>{
				console.log(data.status)
				if(data.status === 200){
					this.setState({
						infoBoxText: 'Sprawdź e-mail w celu odzyskania hasła'
					})
				}else{
					throw Error(data.statusText)
				}
			})
			.catch(err=>console.log(err))

	}

	emailOnChange(event){
		this.setState({
			email: event.target.value
		})
	}

	render() {
		const { infoBoxText } = this.state

		return (
			<React.Fragment>
				<div className="login-background"/>
				<div className="login-flex-container">
					<div className="login-container">
						<img className="login-img-logo" src="logo.png" alt="logo"/>
						<div className="login-input-container-center">
							<div className="login-inputs">
							<div className="infoBox">
								{ infoBoxText }
							</div>
								<input type="email" onChange={this.emailOnChange} value={this.state.email} placeholder="E-mail"/>
							</div>
						</div>
						<div className="login-button-container-center">
							<div className="login-buttons">
								<Remind onClick={ this.onClickRemind }>Potwierdź</Remind>
							</div>
						</div>
						<div className="login-flex-forgotten-password">
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}



export default RemindPassword;