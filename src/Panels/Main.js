import React from 'react';

class Main extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			authorized: false
		};
	}

	render() {
		console.log(serverResponse(getLadders('ladders.gets','ru')));
		return (
			<React.Fragment>
				1
			</React.Fragment>
		);
	}
}


export default Main;
