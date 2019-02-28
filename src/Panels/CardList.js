import React from 'react';

import Card from './Card';

var arrayCards = [{
	id: 1,
	name: 'Михаил',
	surname: 'Петров',
	image: 'https://playground24.ru/img/mike.png',
	phone: '89994307232',
	mail: 'mike@mail.ru'
}, {
	id: 2,
	name: 'Савва',
	surname: 'Антонюк',
	image: 'https://playground24.ru/img/savva.png',
	phone: '89994357232',
	mail: 'savva@mail.ru'
}, {
	id: 3,
	name: 'Алексей',
	surname: 'Полоз',
	image: 'https://playground24.ru/img/alex.png',
	phone: '89434357542',
	mail: 'poloz@mail.ru'
}, {
	id: 4,
	name: 'Леонид',
	surname: 'Романычев',
	image: 'https://playground24.ru/img/leonid.png',
	phone: '89434357542',
	mail: 'leoneed@mail.ru'
}, {
	id: 5,
	name: 'Ксения',
	surname: 'Манскова',
	image: 'https://playground24.ru/img/ksenia.png',
	phone: '89434357542',
	mail: 'ksenia@mail.ru'
}, {
	id: 6,
	name: 'Сергей',
	surname: 'Айхель',
	image: 'https://playground24.ru/img/sergei.png',
	phone: '89402357542',
	mail: 'sergei@mail.ru'
}];


class CardList extends React.Component {
	constructor (props) {
        super(props);
        this.state = {
			displayedCards: arrayCards
		}
        this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(e) {
		var searchQuery = e.target.value.toLowerCase();
		var displayedCards = arrayCards.filter((el) => {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({ displayedCards: displayedCards});
	}

	render() {
		return (
			<div className="container">
				<div className="title">HR 2.0</div>
				<input className="input" type="text" placeholder="Поиск" onChange={this.handleSearch}/>
				<div className="cards-list">
					{this.state.displayedCards.map((el) => {
					    return <Card key={el.id} name={el.name} surname={el.surname} phone={el.phone} mail={el.mail} image={el.image}/>;
					})}
				</div>
			</div>
		);
	}
}


export default CardList;
