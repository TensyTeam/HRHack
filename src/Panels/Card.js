import React from 'react';

class Card extends React.Component {
	constructor (props) {
        super(props);
	}

	render() {
        return (
			<li>
				<img src={this.props.image} width="60px" height="60px" className="contact-image"/>
				<div className="contact-info">
					<div className="contact-name">{this.props.name + ' ' + this.props.surname}</div>
					<div className="contact-number">{this.props.phone}</div>
					<div className="contact-number">{this.props.mail}</div>
				</div>
			</li>
		);
	}
}


export default Card;
