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
			filtros: {
				valorMin: '',
				valorMax: '',
				titulo: '',
			},
			ordenacao: {
				ordem:'',
				valorOrdenado:''
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

	modifyFilteredData = (newFilters) => {		
		this.setState({
			filtros: newFilters
		})
	}

	filterCars = (cars) => {
		const { filtros } = this.state

		const filteredCars = cars
			.filter(car => {
				return Number(car.price) >= Number(filtros.valorMin)
			})
			.filter(car => {
				if (Number(filtros.valorMax) === 0) {
					return true
				}
				return Number(car.price) <= Number(filtros.valorMax)
			})
			.filter(car => {				
				return car.name.toLowerCase().indexOf(filtros.titulo.toLowerCase()) > -1
			})
		return filteredCars
	}

	orderCars = (cars) => {
		
		let campoOrdenado 
		let idName = this.state.ordenacao.ordem
		console.log(idName)	
		 if(this.state.ordenacao.valorOrdenado === 'high value'){
			campoOrdenado = 'price'
		}
		else if (this.state.ordenacao.valorOrdenado === 'lower value' ){
			campoOrdenado = 'price'
			idName = 'ascending order'
		}
		else{
			campoOrdenado = 'name'
		}

	
		console.log(campoOrdenado)
		
		if (idName === 'ascending order') {
			const orderData = cars.sort((a, b) => {
				if (campoOrdenado === 'price') {
					return Number(a.price) < Number(b.price) ? -1 : 1
				}
				return a[campoOrdenado] < b[campoOrdenado] ? -1 : 1
			})
			return orderData
		}
		const orderData = cars.sort((a, b) => {
			if (campoOrdenado === 'price') {
				return Number(a.price) > Number(b.price) ? -1 : 1
			}
			return a[campoOrdenado] > b[campoOrdenado] ? -1 : 1
		})
		return orderData

	}

	updateOrder = (e) => {
		debugger
		const novoValor = e.target.value
		if (novoValor === 'high value' || novoValor === 'lower value' ) {
			this.setState({
				ordenacao: {
					...this.state.ordenacao,
					valorOrdenado: novoValor
				}
			})
		}else if (novoValor === 'ascending order') {
			this.setState({
				ordenacao: {
					...this.state.ordenacao,
					ordem: novoValor
				}
			})
		}else {
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
		const filteredCars = this.filterCars(this.state.dados)
		const orderedCars = this.orderCars(filteredCars)
		return (
			<div>
				<SortOrder
					updateOrder={this.updateOrder}
				/>
				<Filtro newDataFiltered={this.modifyFilteredData} />
				<Card cars={orderedCars} />
			</div>
		)
	}
}	