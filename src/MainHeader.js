import React from 'react';
import './MainHeader.css'

class MainHeader extends React.Component{
	constructor(props){
		super();
		this.state = {
			clicked: false,
			count: 1,
		}

		this.onClick = this.onClick.bind(this)
		this.logout = this.logout.bind(this)
	}

	onClick(){

	}

	logout(){
		window.location.replace("/");
	}

	componentDidUpdate(){
	
	}

	componentDidMount(){
	}


	render(){

		return(
				<div className="header-container">
					<div className="header">
						<div className="MainHeader-logo-container">
							<img className="img-fluid" src="logo.png" alt="logo"/>
						</div>
					</div>
				</div>
		);
	}
}

export default MainHeader;