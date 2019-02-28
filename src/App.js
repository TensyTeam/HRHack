import React from 'react';

import CardList from './Panels/CardList';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activePanel: 'games'
		};
	}

	render() {
		return (
			<CardList />
		);
	}
}

export default App;
