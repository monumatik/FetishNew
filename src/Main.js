import React from 'react';
import './Main.css';
import MainHeader from './MainHeader';

class Main extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			token: this.props.token,
		}
	}

	render() {
		const { token, username } = this.state
		return(
			<React.Fragment>
				<MainHeader/>
      		</React.Fragment>
		)
	}
}



export default Main;