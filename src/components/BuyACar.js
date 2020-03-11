import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';



export default class BuyACar extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<Header
				 handleChangePage = {this.props.handleChangePage}/>
				<Footer />
			</div>
		)
	}
}