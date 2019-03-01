import React, {Component} from 'react'

import Ladder from '../Ladder'
import {ladders} from '../dataLadders'

import './style.css'

class Main extends Component {
	render() {
		const elements = ladders.map(ladder => 
			<Ladder key={ ladder.id } ladder={ ladder } />
		)

		return (
			<div id="main">
				{ elements }
			</div>
		)
	}
}

export default Main