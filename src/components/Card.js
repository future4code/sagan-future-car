import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { render } from 'react-dom';

const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/futureCar/cars"


class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: []
		}
	}


	searchAll = async () => {
		try {
			const response = await axios.get(
				`${baseUrl}`,
			)	
	
			const listaDeCarros = this.props.cars
	
			listaDeCarros.cars = response.data.result.cars
	
			this.searchAll({
				cars
			})
	
		} catch (error) {
	
		}
	}

	componentDidMount() {
		this.searchCard()
	}

	render() {
		return (
			<Container>
				<Card>
					{this.state.cars.map(car => {
						return (
							<div>
								<p> Título: {car.id}</p>
								<p> Nome: {car.name}</p>
								<p> Descrição: {car.description}</p>
								<p> Meio de Pagamento: {car.paymentMethod}</p>
								<p> Valor da venda: {car.price}</p>
								<p> Prazo de Entrega: {car.shipping}</p>
							</div>
						)
					})
					}
				</Card>
			</Container>
		)
	}
}


export default Card; 