import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import Filtro from './Filtro'
import SortOrder from './SortOrder'

export default class BuyACar extends Component{
	constructor(props){
		super(props);
		this.state = {
			dados: [],
			dataFilter: [],
			carrosOrdenados: []
		}
	}

	allCars = async () => {
		const response = await axios.get(`https://us-central1-future-apis.cloudfunctions.net/futureCar/cars`)

		this.setState({
			dados: response.data.cars
			
		})
		console.log(response.data.cars)
	}

	componentDidMount() {
		this.allCars()
	}

	modificaDadosFiltrados = (dados) => {
		this.setState({
			dataFilter: dados
		})
	}
	cardsOrdenados = (cards) => {
		this.setState({ carrosOrdenados: cards })
	}


	render(){
		const dados = this.state.dataFilter.length > 0 ? this.state.dataFilter : this.state.dados
		const ordenados = this.state.carrosOrdenados.length > 0 ? this.state.carrosOrdenados : dados
		return(
			<div>
				<SortOrder
					cardsOrdenados={this.cardsOrdenados}
					test={dados}
				/>
				<Filtro novosDadosFiltrados={this.modificaDadosFiltrados} data={this.state.dados} />
				<Card cars={ordenados} />

			</div>
		)
	}
}
