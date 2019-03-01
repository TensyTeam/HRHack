import React from 'react'

export default function LeftMenu(props) {
	const {economics, programming, hacks} = props
	
	return (
		<div className="navbar column is-paddingless">
			<div className="navbar-item" onClick={ economics }>
				Экономика
			</div>
			<div className="navbar-item" onClick={ programming }>
				Программирование
			</div>
			<div className="navbar-item" onClick={ hacks }>
				Хакатоны
			</div>
		</div>
	)
}