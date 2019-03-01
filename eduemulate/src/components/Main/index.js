import React, {Component} from 'react'
import Chart from 'chart.js'

// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import Ladder from '../Ladder'
import {cards} from '../dataCards'
import {ladders} from '../dataLadders'

import './style.css'

class Main extends Component {
	state = {
		cards: cards
	}

	componentDidMount() {
		// ПОдготовка данных для графика 1

		const user = 1

		let steps = Array.from(new Set(this.state.cards.map(card => {return card.step}))).sort()

		let steps_me = {}
		let steps_other = {}
		let steps_unique = {}
	
		steps.map(step => {
			for (let i in this.state.cards) {
				let id = this.state.cards[i].step
				if (step === id) {
					if (this.state.cards[i].user === user) {
						if (steps_me[step]) {
							steps_me[step] ++
						} else {
							steps_me[step] = 1
						}
					} else {
						if (steps_other[step]) {
							steps_other[step] ++
						} else {
							steps_other[step] = 1
						}

						if (id in steps_unique) {
							steps_unique[id].add(this.state.cards[i].user)
						} else {
							steps_unique[id] = new Set([this.state.cards[i].user])
						}
					}
				}
			}
		})

		let x_me = []
		let x_other = []
	
		steps.map(step => {
			if (step in steps_me) {
				x_me.push(steps_me[step])
			} else {
				x_me.push(0)
			}
		})
	
		steps.map(step => {
			if (step in steps_other) {
				x_other.push(steps_other[step])
			} else {
				x_other.push(0)
			}
		})

		let i = 0
		steps.map(step => {
			x_other[i] /= Array.from(steps_unique[step]).length
			i ++
		})

		// График 1

		let ctx = document.getElementById('chart1').getContext('2d')

		new Chart(ctx, {
			type: 'line',
			data: {
				labels: steps,
				datasets: [{
					label: 'Попытки пользователя по степам',
					data: x_me,
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgb(255, 99, 132)',
					borderWidth: 1
				}, {
					label: 'Среднее количество попыток других пользователей по степам',
					data: x_other,
					backgroundColor: 'rgba(255, 159, 64, 0.2)',
					borderColor: 'rgb(255, 159, 64)',
					borderWidth: 1
				}]
			},

			options: {
				title: {
					display: true,
					text: 'Попыток на одно решение',
					fontSize: 40
				}
			},
		})

		// График 2

		ctx = document.getElementById('chart2').getContext('2d')

		new Chart(ctx,{
			type: 'pie',
			data: {
				labels: ['Экономика', 'Программирование', 'Хакатоны'],
				datasets: [{
					data: [0.4, 0.35, 0.25],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(255, 205, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(201, 203, 207, 0.2)'
					],
					borderColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
						'rgb(153, 102, 255)',
						'rgb(201, 203, 207)'
					],
					borderWidth: 1
				}]
			},
			options: {
				title: {
					display: true,
					text: 'Курсы по пройденному материалу',
					fontSize: 40
				}
			}
		})

		// График 3

		ctx = document.getElementById('chart3').getContext('2d')

		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль'],
				datasets: [{
					data: [54, 56, 48, 72, 108],
					label: 'минуты',
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(255, 205, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(201, 203, 207, 0.2)'
					],
					borderColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
						'rgb(153, 102, 255)',
						'rgb(201, 203, 207)'
					],
					borderWidth: 1
				}]
			},
			options: {
				title: {
					display: true,
					text: 'Время на прохождение степов в месяц',
					fontSize: 40
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		})

		//

	}

	render() {
		const elements = ladders.map(ladder => 
			<Ladder key={ ladder.id } ladder={ ladder } />
		)


		const analytics = this.state.cards.map(card =>
			<div className="box" key={ Math.random() }>
				<h1>
					User: { card.user } &nbsp; | &nbsp; Step: { card.step }
				</h1>
				Time: { card.time_stop - card.time_start }
			</div>
		)

		

		// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

		// const myDataSource = {
		// 	"chart": {
		// 		"numberprefix": "#",
		// 		"plottooltext": "$label",
		// 		"theme": "fusion",
	
		// 		"captionFontSize": "14",
		// 		"subcaptionFontSize": "14",
		// 		"baseFontColor": "#333333",
		// 		"baseFont": "Helvetica Neue,Arial",
		// 		"basefontsize": "9",
		// 		"subcaptionFontBold": "0",
		// 		"bgColor": "#f8f9fa",
		// 		"bgAlpha": "100",
		// 		"canvasBgColor": "#ffffff",
		// 		"showBorder": "0",
		// 		"showShadow": "0",
		// 		"showCanvasBorder": "0",
		// 		"pieFillAlpha": "60",
		// 		"pieBorderThickness": "2",
		// 		"hoverFillColor": "#cccccc",
		// 		"pieBorderColor": "#ffffff",
		// 		"useHoverColor": "1",
		// 		"showValuesInTooltip": "1",
		// 		"showPercentInTooltip": "0",
		// 		"pieRadius": "400",
		// 	},
		// 	"category": [{
		// 		'label': 'Экономика',
		// 		'color': '#ff9',
		// 		'category': [{
		// 			'label': 'Макроэкономика',
		// 			'color': '#ff9',
		// 		}, {
		// 			'label': 'Микроэкономика',
		// 			'color': '#ff9',
		// 		}, {
		// 			'label': 'Гиперэкономика',
		// 			'color': '#ff9',
		// 		}],
		// 	}, {
		// 		'label': 'Программирование',
		// 		'color': '#fc6',
		// 		'category': [{
		// 			'label': 'JavaScript',
		// 			'color': '#fc6',
		// 		}, {
		// 			'label': 'React',
		// 			'color': '#fc6',
		// 		}, {
		// 			'label': 'Танцы с бубнами',
		// 			'color': '#fc6',
		// 		}],
		// 	}, {
		// 		'label': 'Хакатоны',
		// 		'color': '#f93',
		// 		'category': [{
		// 			'label': 'Набивание пуфиков',
		// 			'color': '#f93',
		// 		}, {
		// 			'label': 'Роутеризация',
		// 			'color': '#f93',
		// 		}, {
		// 			'label': 'Мерч',
		// 			'color': '#f93',
		// 		}],
		// 	}]
		// }

		// const chartConfigs = {
		// 	type: 'multilevelpie',
		// 	renderAt: 'chart-container',
		// 	width: '100%',
		// 	height: '650',
		// 	dataFormat: 'json',
	  	// }

		// <ReactFC {...chartConfigs} />

		return (
			<div id="main">
				{ elements }
				<br /><hr /><br />
				<canvas id="chart1" height="250" style={ {maxWidth: '100%'} }></canvas>
				<br /><hr /><br />
				<canvas id="chart2" height="250" style={ {maxWidth: '100%' } }></canvas>
				<br /><hr /><br />
				<canvas id="chart3" height="250" style={ {maxWidth: '100%'} }></canvas>
				<br /><hr /><br />
				{ analytics }
			</div>
		)
	}
}

export default Main