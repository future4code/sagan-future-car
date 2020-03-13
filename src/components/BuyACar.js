import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import Filtro from './Filtro'
import SortOrder from './SortOrder'

export default class BuyACar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dados: [],
			// dataFilter: [],
			// carrosOrdenados: []
			filtros: {
				valorMin: '',
				valorMax: '',
				titulo: '',
			},
			ordenacao: {
				ordem: '',
				valorOrdenado: ''
			}
		}
	}

	allCars = async () => {
		const response = await axios.get(`https://us-central1-future-apis.cloudfunctions.net/futureCar/cars`)
		const ordemCars = response.data.cars.sort((a, b) => {
			return Number(a.price) < Number(b.price) ? -1 : 1
		})
		this.setState({
			dados: ordemCars
		})
	}

	componentDidMount() {
		this.allCars()
	}

	modificaDadosFiltrados = (novosFiltros) => {
		console.log(novosFiltros)
		this.setState({
			filtros: novosFiltros
		})
	}

	filtrarCarros = (carros) => {
		const { filtros } = this.state

		const carrosFiltrados = carros
			.filter(carro => {
				return Number(carro.price) >= Number(filtros.valorMin)
			})
			.filter(carro => {
				if (Number(filtros.valorMax) === 0) {
					return true
				}
				return Number(carro.price) <= Number(filtros.valorMax)
			})
			.filter(carro => {
				console.log(carro.titulo, filtros.titulo)
				return carro.name.toLowerCase().indexOf(filtros.titulo.toLowerCase()) > -1
			})
		return carrosFiltrados
	}

	ordenarCarros = (cars) => {
		const idName = this.state.ordenacao.ordem
		const campoOrdenado = this.state.ordenacao.valorOrdenado === 'high value' ? 'price' : 'name'
		
		if (idName === 'ascending order') {
			const orderData = cars.sort((a, b) => {
				if(campoOrdenado === 'price'){
					return Number(a.price) < Number(b.price) ? -1 : 1
				}
				return a[campoOrdenado] < b[campoOrdenado] ? -1 : 1
			})
			return orderData
		}
		const orderData = cars.sort((a, b) => {
			if(campoOrdenado === 'price'){
				return Number(a.price) > Number(b.price) ? -1 : 1
			}
			return a[campoOrdenado] > b[campoOrdenado] ? -1 : 1
		})
		return orderData

	}

	atualizaOrdenacao = (e) => {
		const novoValor = e.target.value
		if (novoValor === 'high value') {
			this.setState({
				ordenacao: {
					...this.state.ordenacao,
					valorOrdenado: novoValor
				}
			})
		}
		else if (novoValor === 'ascending order') {
			this.setState({
				ordenacao: {
					...this.state.ordenacao,
					ordem: novoValor
				}
			})
		}
		else {
			this.setState({
				ordenacao: {
					ordem: '',
					valorOrdenado: ''
				}
			})
		}
	}

	render() {
		if (this.state.dados.length === 0) {
			return <h1>Carregando...</h1>
		}

		const carrosFiltrados = this.filtrarCarros(this.state.dados)
		const carrosOrdenados = this.ordenarCarros(carrosFiltrados)
		return (
			<div>
				<SortOrder
					atualizaOrdenacao={this.atualizaOrdenacao}
				/>
				<Filtro novosDadosFiltrados={this.modificaDadosFiltrados} />
				<Card cars={carrosOrdenados} />

			</div>
		)
	}
}
