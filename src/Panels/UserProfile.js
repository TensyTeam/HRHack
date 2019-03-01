import React from 'react';
import { arrayCards } from './ArrayCards';

class UserProfile extends React.Component {

	render() {
		return (
			<div id="UserProfile">
				<div className="title">Tensegrity</div>
				<div className="container">
					<button onClick={() => { this.props.onUpdatePanel('CardList')}} className="btn">Назад</button>
					<div className="content-profile">
						<img src={arrayCards[this.props.idUser].image} className="card-image"/>
						<div className="card-info">
							<div className="card-name">{arrayCards[this.props.idUser].name + ' ' + arrayCards[this.props.idUser].surname}</div>
							<div className="card-phone">{arrayCards[this.props.idUser].phone}</div>
							<div className="card-mail">{arrayCards[this.props.idUser].mail}</div>
						</div>
						<button className="btn">Связаться</button>
					</div>
				</div>
			</div>
		);
	}
}


export default UserProfile;
