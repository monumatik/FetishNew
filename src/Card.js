import React from 'react';

class Card extends React.Component {
	constructor(props){
		super(props)
		console.log(this.props.images)
	}

	componentDidUpdate(){
	}

	render() {
		const images=[], indicators=[]
		this.props.images.forEach((value, key)=>{
			if(key){
				images.push(<div className="carousel-item active">
					<img className="d-block w-100" src={ value } alt="First slide"/>
				</div>)
			}else{
				images.push(<div className="carousel-item">
					<img className="d-block w-100" src={ value } alt="First slide"/>
				</div>)
			}
		})

		return(
			<React.Fragment>
				<div className="card w-50">
					<div className="card-body">
					    <h5 className="card-title body-font-h1">
							{ this.props.login }
					    </h5>
					    <div id="carouselExampleIndicators" className="carousel slide" data-interval="false" data-ride="false">
							<ol className="carousel-indicators">
								<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
								<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						  	</ol>
						  	<div className="carousel-inner">
						    	{ images }
						  	</div>
						  	<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						    	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						    	<span className="sr-only">Previous</span>
						  	</a>
						  	<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						    	<span className="carousel-control-next-icon" aria-hidden="true"></span>
						    	<span className="sr-only">Next</span>
						  	</a>
						</div>
					    <h6 className="card-subtitle">
					    	asd
					    </h6>
					    <p className="card-text body-font-h2">
					    	asdasdasd
					    </p>
					</div>
				</div>
      		</React.Fragment>
		)
	}
}



export default Card;