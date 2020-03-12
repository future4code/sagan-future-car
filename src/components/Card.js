import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { render } from 'react-dom';

const CardBox = styled.div`

`

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: []
		}
	}

	render() {
		return (
			<div>
				<CardBox>
					{this.props.cars.map(car => {
						return (
							<div>
								<p> Título: {car.name}</p>
								<p> Descrição: {car.description}</p>
								<p> Meio de Pagamento: {car.paymentMethod}</p>
								<p> Valor da venda: {car.price}</p>
								<p> Prazo de Entrega: {car.shipping}</p>
							</div>
						)
					})
					}
				</CardBox>
			</div>
		)
	}
}


export default Card; 