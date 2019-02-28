import React from 'react';

class Card extends React.Component {
	constructor (props) {
        super(props);
	}

	render() {
        return (
			<a onClick={() => { this.props.onUpdatePanel('UserProfile',this.props.id)}} className="card">
				<img src={this.props.image} className="card-image"/>
				<div className="card-info">
					<div className="card-name">{this.props.name + ' ' + this.props.surname}</div>
				</div>
			</a>
		);
	}
}


export default Card;
