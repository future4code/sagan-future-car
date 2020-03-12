import React from 'react'

class SortList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: []
		}
	}
	sortName = (e) => {
		const idName = e.target.value
		const cars = this.props.newDataFilter
		if (idName == 'ascending order') {
			const orderData = cars.sort((a, b) => {
				return a.name < b.name ? -1 : a.name > b.name ? 1 : 1
			})
			this.props.cardsOrdenados(orderData)
		}
		else {
			const orderData = cars.sort((a, b) => {
				return a.name > b.name ? -1 : a.name < b.name ? 1 : 1
			})
			this.props.cardsOrdenados(orderData)
		}

	}

	sortPrice = (e) => {
		const idName = e.target.value
		const cars = this.props.newDataFilter
		if (idName == 'high value') {
			const test = cars.sort((a, b) => {
				return parseFloat(a.price) > parseFloat(b.price) ? -1 
				: parseFloat(a.price) < parseFloat(b.price) ? 1 : 0
			})
			console.log(test.price)
			this.props.cardsOrdenados(test)
		}
		else {
			const test = cars.sort((a, b) => {
				return parseFloat(a.price) < parseFloat(b.price) ? -1 
				: parseFloat(a.price) > parseFloat(b.price) ? 1 : 0
			})
			this.props.cardsOrdenados(test)
		}
	}
	render() {
		return (
			<div>
				<span>Ordenar os Cards</span>
				<select onChange={this.sortName}>
					<option>Selecione</option>
					<option
						value='ascending order'
					>
						Nome Crescente
					</option>
					<option>
						Nome Decrescente
					</option>
				</select>
				<select onChange={this.sortPrice}>
					<option>Selecione </option>
					<option
						value='high value'
					>
						Maior Preço
					</option>
					<option>
						Menor Preço
					</option>

				</select>
			</div>
		)
	}
}

export default SortList