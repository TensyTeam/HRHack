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
			var searchValue = el.surname.toLowerCase() + ' ' + el.name.toLowerCase() + '#q';
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({ displayedCards: displayedCards});
	}

	render() {
		return (
			<div>
				<div className="title">HR 2.0</div>
				<div className="container">
					<div className="sidebar">
						<input className="input" type="text" placeholder="Поиск" onChange={this.handleSearch}/>
						<div class="steps-list">
							<h2>Степы</h2>
							<div class="inputGroup">
								<input id="option1" name="Макроэкономика" type="checkbox"/>
								<label for="option1">Макроэкономика</label>
							</div>
							<div class="inputGroup">
								<input id="option2" name="Микроэкономика" type="checkbox"/>
								<label for="option2">Микроэкономика</label>
							</div>
							<div class="inputGroup">
								<input id="option3" name="Гиперэкономика" type="checkbox"/>
								<label for="option3">Гиперэкономика</label>
							</div>
							<div class="inputGroup">
								<input id="option4" name="JavaScript" type="checkbox"/>
								<label for="option4">JavaScript</label>
							</div>
							<div class="inputGroup">
								<input id="option5" name="React" type="checkbox"/>
								<label for="option5">React</label>
							</div>
							<div class="inputGroup">
								<input id="option6" name="Танцы с бубном" type="checkbox"/>
								<label for="option6">Танцы с бубном</label>
							</div>
							<div class="inputGroup">
								<input id="option7" name="Роутеризация" type="checkbox"/>
								<label for="option7">Роутеризация</label>
							</div>
							<div class="inputGroup">
								<input id="option8" name="Набивание пуфиков" type="checkbox"/>
								<label for="option8">Набивание пуфиков</label>
							</div>
							<div class="inputGroup">
								<input id="option9" name="Мерч" type="checkbox"/>
								<label for="option9">Мерч</label>
							</div>
						</div>
					</div>
					<div className="content">
						<div className="cards-list">
							{this.state.displayedCards.map((el) => {
							    return <Card key={el.id} name={el.name} surname={el.surname} phone={el.phone} mail={el.mail} image={el.image}/>;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default CardList;
