import React, { Component } from 'react';
import styled from 'styled-components';

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
			dataFilter: [],
		}
	}

	handleOnChangeValueMin =(event) => {
		this.setState({
			valorMin: event.target.value
		})

		if (event.target.value && event.target.value.lenght > 0) {
			const dados = (this.state.valorMax.length > 0 || this.state.titulo.length > 0) ? this.state.dataFilter : this.state.data
			const dataFilter = this.filterByMinValue(event.target.value, dados)

			this.props.novosDadosFiltrados(dataFilter)

			this.setState({
				dataFilter
			})

		} else {
			let dados = this.props.data

			if (this.state.valorMax.length > 0) {
				dados = this.filterByMaxValue(this.state.valorMax, dados)
			}

			if (this.state.titulo.length > 0) {
				dados = this.filterByTitulo(this.state.titulo, dados)
			}

			this.props.novosDadosFiltrados(dados)

			this.setState({
				dataFilter: dados
			})
		}
	}

	handleOnChangeValueMax = (event) => {
		this.setState({
			valorMax: event.target.value
		})

		if (event.target.value && event.target.value.lenght > 0) {
			const dados = (this.state.valorMin.lenght > 0 || this.state.titulo.lenght > 0) ? this.state.dataFilter : this.state.data
			const dataFilter = this.filterByMaxValue(event.target.value, dados)

			this.props.novosDadosFiltrados(dataFilter)

			this.setState({
				dataFilter
			})

		} else {
			let dados = this.props.data

			if (this.state.valorMin.length > 0) {
				dados = this.filterByMinValue(this.state.valorMin, dados)
			}

			if (this.state.titulo.length > 0) {
				dados = this.filterByTitulo(this.state.titulo, dados)
			}

			this.props.novosDadosFiltrados(dados)

			this.setState({
				dataFilter: dados
			})
		}
	}

	handleOnChangeTitulo = (event) => {
		this.setState({
			titulo: event.target.value
		})

		if (event.target.value && event.taget.value > 0) {
			const dados = (this.state.valorMin.lenght > 0 || this.state.valorMax > 0) ? this.state.dataFilter : this.state.data
			const dataFilter = this.filterByTitulo(event.target.value, dados)

			this.props.novosDadosFiltrados(dataFilter)

			this.setState({
				dataFilter
			})

		} else {
			let dados = this.props.data

			if (this.state.valorMax > 0) {
				dados = this.filterByMaxValue(this.state.valorMax, dados)
			}

			if (this.state.valorMin > 0) {
				dados = this.filterByMinValue(this.state.valorMin, dados)
			}

			this.props.novosDadosFiltrados(dados)

			this.setState({
				dataFilter: dados
			})
		}
	}

	filterByMinValue = (value, data) => {
		return data.filter(dado => {
			return dado.price <= value
		})
	}

	filterByMaxValue = (value, data) => {
		return data.filter(dado => {
			return dado.price <= value
		})
	}

	filterByTitulo = (value, data) => {
		return data.filter(dado => {
			return dado.name.toLowerCase().includes(value.toLowerCase())
		})
	}

	render() {
		return (
			<FilterWrapper>
				<label for="valorMin"> Valor Mínimo: </label>
				<input type='number' id="valorMin" onChange={this.handleOnChangeValueMin} value={this.state.valorMin} />
				<label for="valorMax"> Valor Maximo: </label>
				<input type='number' id="valoraMax" onChange={this.handleOnChangeValueMax} value={this.state.valorMax} />
				<label for="valorMin"> Título: </label> 
				<input type='text' id="titulo" onChange={this.handleOnChangeTitulo} value={this.state.titulo} />
			</FilterWrapper>
		)
	}
}

export default Filtro; 