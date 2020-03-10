import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const WrapperHome = styled.div`
background-color: #FAFAFA;
`
const WrapperNavegation = styled.div`
display:flex;
height: 70vh;
justify-content: space-evenly;
align-items: center;

`
const ImgPag = styled.img`
width: 100%;
height: 100%;
box-shadow:5px 5px 9px black;
padding:0;
margin: 0;

`
const Figure = styled.figure`
width: 30%;
height: 70%;
text-align: center;
`

const HomePage = () => {
	return (
		<WrapperHome>
			<Header />
			<WrapperNavegation>
				<Figure>
					<ImgPag 
					src={require('../img/buyCar.jpg')} 
					onClick={'aqui vai uma props'}
					/>
					<figcaption> Compre um carro novo</figcaption>
				</Figure>
				<Figure>
					<ImgPag src={require('../img/sellCar.jpg')}
					onClick={'aqui vai uma props'}
					 />
					<figcaption> Venda seu carro</figcaption>
				</Figure>
			</WrapperNavegation>
			<Footer />
		</WrapperHome>
	)
}


export default HomePage