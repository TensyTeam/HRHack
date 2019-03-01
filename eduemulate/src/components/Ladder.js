import React, {Component} from 'react'

import web3 from 'web3'

import passStep from './contractinteraction'
import {network} from './sets'


class Ladders extends Component {
	render() {
		const ladder = this.props.ladder

		const elements = ladder.steps.map(step =>
			<button
				key={ ladder.id + '-' + step.id }
				className="button is-size-6 has-text-weight-semibold"
				style={ {
					boxShadow: '0 4px 6px 0 rgba(50,50,93,.11)',
					background: 'linear-gradient(90deg,#2cc7c0,#59d99d)',
					border: 'none',
					color: '#fff'
				} }
				onClick={ this.handleSmartContract }
			>{ step.name }</button>
		)

		return (
			<div className="box is-size-2">
				<h1 className="has-text-weight-semibold">
					{ ladder.name }
				</h1>
				<div>
					{ elements }
				</div>
			</div>
		)
	}

	handleSmartContract = () => {
		console.log('!1')
		window.addEventListener('load', () => {
			console.log('!2')
			if (typeof(window.web3) == 'undefined') {
				return console.log('Metamask is not installed')
			}

			let contract = web3.eth.contract(network.abi).at(network.contract_address)
			console.log(contract)
		});
	}
}

export default Ladders