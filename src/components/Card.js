import React, { Component } from 'react';
import styled from 'styled-components'


const CardBox = styled.div`
	height: 100vh;
	background:FFFFFF;
	display:grid;
	grid-gap:20px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto auto auto;
	
`

const CardDetails = styled.div`		
	border:1px solid black;
    width:15vw;
    margin:20px;	
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	
`

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<CardBox>
					{this.props.cars.map(car => {
						return (
							<CardDetails>
								<p> Título: {car.name}</p>
								<p> Descrição: {car.description}</p>
								<p> Forma de Pagamento: {car.paymentMethod}</p>
								<p> Valor da venda: {car.price}</p>
								<p> Prazo de Entrega: {car.shipping}</p>
							</CardDetails>
						)
					})
					}
				</CardBox>
			</div>
		)
	}
}

export default Card; 