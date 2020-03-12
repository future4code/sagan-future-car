import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const CardBox = styled.div`	
	display:grid;
	grid-gap:2px;
	grid-template-columns: 1fr 1fr 1fr 1fr;	
`

const CardDetails = styled.div`		
	border:1px solid black;
    width:22vw;
    margin:10px;	
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
								<p> Carro: {car.name}</p>								
								<p> Descrição: {car.description}</p>
								<p> Forma de Pagamento: {car.paymentMethod}</p>
								<p> Valor da venda:R$ {car.price}</p>
								<p> Prazo de Entrega: {car.shipping}</p>								
								<IconButton color="primary" aria-label="add to shopping cart">
        						<AddShoppingCartIcon />
      							</IconButton>								
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