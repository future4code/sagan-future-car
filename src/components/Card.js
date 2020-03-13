import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const CardBox = styled.div`	
	display:grid;
	grid-gap:2px;
	grid-template-columns: 1fr 1fr 1fr 1fr;	
`
const DetailsCar = styled.div`
	margin-left:10px;
	max-width:15vw;
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

function Card(props) {
	return (
				<div>
					<CardBox>
						{props.cars.map(car => {
							debugger
							return (
								<CardDetails>
									<p>{car.name}</p>
									<DetailsCar>								
									<p> Descrição: {car.description}</p>
									<p> Forma de Pagamento: {car.paymentMethod}</p>
									<p> Valor da venda:R$ {car.price}</p>
									<p> Prazo de Entrega: {car.shipping}</p>
									</DetailsCar>								
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

export default Card; 