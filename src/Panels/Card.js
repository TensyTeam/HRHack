import React from 'react'


function intersection(A, B)
{
	var m = A.length, n = B.length, c = 0, C = [];
	for (var i = 0; i < m; i++)
	{ 
		var j = 0, k = 0;
		while (B[j] !== A[ i ] && j < n) j++;
		while (C[k] !== A[ i ] && k < c) k++;
		if (j != n && k == c) C[c++] = A[ i ];
	}
	return C;
}

class Card extends React.Component {
	constructor (props) {
        	super(props);
	}

	// (this.props.skills & this.props.skill)
	// !Array.from(this.props.skills).length || false
	// false | Array.from(intersection(this.props.skills, skills).length)

	// !Array.from(this.props.skills).length === true

	render() {
		let skills = this.props.skill.toLowerCase().split(', ')
		console.log(this.props.skills, skills, false || intersection(Array.from(this.props.skills), skills).length)
        	return (
			<div>
			{ this.props.re }
			{
				((!this.props.search.length || (this.props.surname.toLowerCase() + ' ' + this.props.name.toLowerCase()).indexOf(this.props.search) !== -1) && (false || intersection(Array.from(this.props.skills), skills).length)) == 0 &&  
				<a onClick={() => { this.props.onUpdatePanel('UserProfile',this.props.id)}} className="card">
					<img src={this.props.image} className="card-image"/>
					<div className="card-info">
						<div className="card-name">{this.props.name + ' ' + this.props.surname}</div>
					</div>
				</a>
			}
			</div>
		)
	}
}


export default Card;
