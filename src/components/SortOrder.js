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
	
	render() {
		return (
			<SortWrapper>
				<h3>Ordenar os Carros</h3>
				<select onChange={this.props.atualizaOrdenacao}>
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
				<select onChange={this.props.atualizaOrdenacao}>
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