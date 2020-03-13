import React from 'react'
import styled from 'styled-components'

const SortWrapper = styled.div`
	text-align:center;
`

export default function SortOrder(props) {
	return (
		<SortWrapper>
			<h3>Ordenar os Carros</h3>
			<select onChange={props.updateOrder}>
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
			<select onChange={props.updateOrder}>
				<option>Selecione </option>
				<option
					value='high value'
				>
					Maior Preço
					</option>
				<option
					value='lower value'
				>
					Menor Preço
					</option>
			</select>
		</SortWrapper>
	)
}