import React from 'react'

class SortList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: []
		}
	}
	renderizar = (e) => {
		const idName = e.target.value
		if (idName == 'nomeCrescente') {
			console.log('if')
			const cars = this.props.test
			const test = cars.sort((a, b) => {
				return a.name < b.name ? -1 : a.name > b.name ? 1 : 1
			})
			console.log(test)
			this.props.cardsOrdenados(test)
		}

		else {
			console.log('else')
			const cars = this.props.test
			const test = cars.sort((a, b) => {
				return a.name > b.name ? -1 : a.name < b.name ? 1 : 1
			})
			console.log(test)
			this.props.cardsOrdenados(test)
		}

	}


	ordernarPreco = (e) => {
		const idName = e.target.value
		const cars = this.props.test
		console.log(cars)
		if (idName == 'maiorPreco') {
			const test = cars.sort((a, b) => {
				return a.price < b.price ? -1 : a.price > b.price ? 1: 0
			
			})
			console.log(test + 'if')
			this.props.cardsOrdenados(test)
		}
		else {
			const test = cars.sort((a, b) => {
				return a.price > b.price ? -1 : a.price < b.price ? 1: 0
			})
			console.log(test + 'else')
			this.props.cardsOrdenados(test)

		}

	}

	render() {
		return (
			<div>
				<span>Ordenar os Cards</span>
				<select onChange={this.renderizar}>
					<option>Selecione</option>
					<option
						value='nomeCrescente'
					>
						Ordem Crescente
					</option>
					<option
						value='nomeDecrescente'
					>
						Ordem Decrescente
					</option>
				</select>
				<select onChange={this.ordernarPreco}>
					<option>Selecione </option>
					<option
						value='maiorPreco'
					>
						Maior Preço
					</option>
					<option
						value='menorPreco'
					>
						Menor Preço
					</option>

				</select>
			</div>
		)
	}
}

export default SortList