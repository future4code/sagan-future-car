import React, { Component } from 'react';
import styled from 'styled-components';

import { Input } from '@material-ui/core';

const FilterWrapper = styled.div`
	text-align:center;
	margin-top:10px;
`

class Filtro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valorMin: '',
			valorMax: '',
			titulo: '',
		}
	}

	handleOnChangeValueMin = (event) => {
		this.setState({
			valorMin: event.target.value
		})
		this.props.novosDadosFiltrados({ ...this.state, valorMin: event.target.value })
	}

	handleOnChangeValueMax = (event) => {
		this.setState({
			valorMax: event.target.value
		})
		this.props.novosDadosFiltrados({ ...this.state, valorMax: event.target.value })
	}


	handleOnChangeTitulo = (event) => {
		this.setState({
			titulo: event.target.value
		})
		this.props.novosDadosFiltrados({ ...this.state, titulo: event.target.value })
	}
	render() {
		return (
			<FilterWrapper>
				<label for="valorMin"> Valor Mínimo: </label>
				<Input type='number' id="valorMin" onChange={this.handleOnChangeValueMin} value={this.state.valorMin} />
				<label for="valorMax"> Valor Maximo: </label>
				<Input type='number' id="valoraMax" onChange={this.handleOnChangeValueMax} value={this.state.valorMax} />
				<label for="valorMin"> Título: </label>
				<Input type='text' id="titulo" onChange={this.handleOnChangeTitulo} value={this.state.titulo} />
			</FilterWrapper>
		)
	}
}

export default Filtro; 