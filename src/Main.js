import React from 'react';
import './Main.css';
import MainHeader from './MainHeader';
import Card from './Card';

class Main extends React.Component {
	constructor(props){
		super(props)
		this.state={
			images: ['https://www.somersetcountygazette.co.uk/resources/images/9060956.jpg?display=1&htype=85&type=responsive-gallery'],
			login: ''
		}
		this.getToken=this.getToken.bind(this)
	}

	getToken(){
		return this.props.token
	}

	componentDidMount(){
		fetch(`http://localhost:3001/getFetish`,
		{
			method: 'POST',
			body: JSON.stringify({
				token: this.getToken()
				}),
			headers:{
			    'Content-Type': 'application/json'
			 }
		})
		.then(data=>data.json())
		.then(data=>{
			this.setState({
				images: data.data.images,
				login: data.data.login
			})
		})
	}

	render() {
		const { images, login } = this.state
		return(
			<React.Fragment>
				<MainHeader/>
				<div className="container border border-primary" style={{maxWidth:'1000px'}}>
					<div className="d-inline-flex border border-secondary w-100 justify-content-center Main-body-margin-top">
						<Card images={ images } login={ login }/>
					</div>
      			</div>
      		</React.Fragment>
		)
	}
}



export default Main;