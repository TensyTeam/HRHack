import React from 'react';
import Card from './Card';
import { arrayCards } from './ArrayCards';

class CardList extends React.Component {
	constructor (props) {
        super(props);
        this.state = {
			displayedCards: arrayCards,
			skills: []
		}
        this.handleSearch = this.handleSearch.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
	}

	handleCheckbox(e) {
		var searchQuery = e.toLowerCase();
		var displayedCards = arrayCards.filter((el) => {
			var searchValue = el.skills.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({ displayedCards: displayedCards});
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
			<div id="cards">
				<div className="title">Tensegrity</div>
				<div className="container">
					<div className="sidebar">
						<input className="input" type="text" placeholder="Поиск" onChange={this.handleSearch}/>
						<div className="steps-list">
							<div className="subtitle">Экономика</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('Макроэкономика')}} id="option1" name="Макроэкономика" type="checkbox"/>
								<label htmlFor="option1">Макроэкономика</label>
							</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('Микроэкономика')}} id="option2" name="Микроэкономика" type="checkbox"/>
								<label htmlFor="option2">Микроэкономика</label>
							</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('Гиперэкономика')}} id="option3" name="Гиперэкономика" type="checkbox"/>
								<label htmlFor="option3">Гиперэкономика</label>
							</div>
							<div className="subtitle">Программирование</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('JavaScript')}} id="option4" name="JavaScript" type="checkbox"/>
								<label htmlFor="option4">JavaScript</label>
							</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('React')}} id="option5" name="React" type="checkbox"/>
								<label htmlFor="option5">React</label>
							</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('Танцысбубном')}} id="option6" name="Танцысбубном" type="checkbox"/>
								<label htmlFor="option6">Танцы с бубном</label>
							</div>
							<div className="subtitle">Хакатон</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('Роутеризация')}} id="option7" name="Роутеризация" type="checkbox"/>
								<label htmlFor="option7">Роутеризация</label>
							</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('Набиваниепуфиков')}} id="option8" name="Набиваниепуфиков" type="checkbox"/>
								<label htmlFor="option8">Набивание пуфиков</label>
							</div>
							<div className="inputGroup">
								<input onClick={() => {this.handleCheckbox('Мерч')}} id="option9" name="Мерч" type="checkbox"/>
								<label htmlFor="option9">Мерч</label>
							</div>
						</div>
					</div>
					<div className="content">
						<div className="cards-list">
							{this.state.displayedCards.map((el) => {
							    return <Card  onUpdatePanel={this.props.onUpdatePanel} key={el.id} id={el.id} name={el.name} surname={el.surname} phone={el.phone} mail={el.mail} image={el.image}/>;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default CardList;
