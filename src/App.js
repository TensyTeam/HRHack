import React from 'react';

import Main from './Panels/Main';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activePanel: 'games'
		};
		this.onChangePanel = this.onChangePanel.bind(this);
	}

	onChangePanel (e) {
		this.setState({ activePanel: e.currentTarget.dataset.panel })
	}

	render() {
		return (
			<Main />
		);
	}
}

export default App;
