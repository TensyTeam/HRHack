import React from 'react';

class Card extends React.Component {
	constructor (props) {
        super(props);
	}

	render() {
        return (
			<a href="#" className="card">
				<img src={this.props.image} className="card-image"/>
				<div className="card-info">
					<div className="card-name">{this.props.name + ' ' + this.props.surname}</div>
					<div className="card-phone">{this.props.phone}</div>
					<div className="card-mail">{this.props.mail}</div>
				</div>
			</a>
		);
	}
}


export default Card;
