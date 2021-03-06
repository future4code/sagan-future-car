import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button';

const WrapperHome = styled.div`
background-color: #FAFAFA;
height: 80vh;
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
margin-bottom: 5rem;
`
const Figure = styled.figure`
width: 30%;
height: 70%;
text-align: center;
`

const HomePage = (props) => {
	const renderPage = (id) => {
		props.handleChangePage(id)
	}

	return (
		<WrapperHome>
			<WrapperNavegation>
				<Figure>
					<ImgPag
						src={require('../img/buyCar.jpg')}
						onClick={'aqui vai uma props'}
					/>
					<Button onClick={() => renderPage("buyCar")} variant="contained" color="primary">
						Compre um carro novo
      					</Button>
				</Figure>
				<Figure>
					<ImgPag src={require('../img/sellCar.jpg')}
						onClick={'aqui vai uma props'}
					/>
					<Button onClick={() => renderPage("sellCar")} variant="contained" color="primary">
						Venda seu carro
     					</Button>
				</Figure>
			</WrapperNavegation>
		</WrapperHome>
	)
}

export default HomePage