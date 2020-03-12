import React from 'react'
import styled from 'styled-components'

const SortWrapper = styled.div`
	text-align:center;
`

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

		} else {

			const orderData = cars.sort((a, b) => {
				return a.name > b.name ? -1 : a.name < b.name ? 1 : 1
			})
			this.props.cardsOrdenados(orderData)

		}


		}
	}

	sortPrice = (e) => {
		const idName = e.target.value
		const cars = this.props.newDataFilter
		if (idName == 'high value') {

			const sortCars = cars.sort((a, b) => {
				return parseFloat(a.price) > parseFloat(b.price) ? -1 
				: parseFloat(a.price) < parseFloat(b.price) ? 1 : 0
			})
			this.props.cardsOrdenados(sortCars)				
		}else {
			const sortCars = cars.sort((a, b) => {
				return parseFloat(a.price) < parseFloat(b.price) ? -1 
				: parseFloat(a.price) > parseFloat(b.price) ? 1 : 0				
			})
			this.props.cardsOrdenados(sortCars)

		}
	}
	render() {
		return (

			<SortWrapper>
				<h3>Ordenar os Carros</h3>

				<select onChange={this.sortName}>
					<option>Selecione</option>
					<option
						value='ascending order'
					>
						Nome Crescente
					</option>

					<option
						value='nomeDecrescente'
					>
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
			</SortWrapper>
		)
	}
}

export default SortList