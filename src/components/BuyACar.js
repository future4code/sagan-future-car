import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import axios from 'axios';
import Filtro from './Filtro'



export default class BuyACar extends Component{
	constructor(props){
		super(props);
		this.state = {
			dados: [],
			dataFilter: []
		}
	}

	allCars = async () => {
		const response = await axios.get(`https://us-central1-future-apis.cloudfunctions.net/futureCar/cars`)

		this.setState({
			dados: response.data.cars
		})
	}

	componentDidMount() {
		this.allCars()
	}

	modificaDadosFiltrados = (dados) => {
		this.setState({
			dataFilter: dados
		})
	}

	render(){
		const dados = this.state.dataFilter.length > 0 ? this.state.dataFilter : this.state.dados
		return(
			<div>
				<Header
				 handleChangePage = {this.props.handleChangePage}/>
				<Filtro novosDadosFiltrados={this.modificaDadosFiltrados} data={this.state.dados}/>
				<Card cars={dados}/>
				<Footer />
			</div>
		)
	}
}
