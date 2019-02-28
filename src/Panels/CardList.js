import React from 'react';

import Card from './Card';

var CONTACTS = [{
  id: 1,
  name: 'Михаил',
  surname: 'Петров',
  image: 'https://cdn.worldvectorlogo.com/logos/apple.svg',
  phone: '89994307232',
  mail: 'ya@mail.ru'
}, {
  id: 2,
  name: 'Савва',
  surname: 'Антонюк',
  image: 'https://cdn.worldvectorlogo.com/logos/apple.svg',
  phone: '89994357232',
  mail: 'test@mail.ru'
}, {
  id: 3,
  name: 'Алексей',
  surname: 'Подвальный',
  image: 'https://cdn.worldvectorlogo.com/logos/apple.svg',
  phone: '89434357542',
  mail: 't4t@mail.ru'
}, {
  id: 4,
  name: 'Алиса',
  surname: 'Боровина',
  image: 'https://cdn.worldvectorlogo.com/logos/apple.svg',
  phone: '89402357542',
  mail: 'alice@mail.ru'
}];


class CardList extends React.Component {
	constructor (props) {
        super(props);
        this.state = {
			displayedContacts: CONTACTS
		}

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = CONTACTS.filter(function(el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({ displayedContacts: displayedContacts});
	}

	render() {
		return (
			<div className="contacts">
				<input type="text" className="search-field" onChange={this.handleSearch}/>
				<ul className="contacts-list">
				  {
					  this.state.displayedContacts.map(function(el) {
				      return <Card
				        key={el.id}
				        name={el.name}
				        surname={el.surname}
				        phone={el.phone}
				        mail={el.mail}
				        image={el.image}/>;
				    })
				  }
				</ul>
			</div>
		);
	}
}


export default CardList;
