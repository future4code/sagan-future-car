import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MainHeader = styled.header`
	background:#143E54;
	height:10vh;
	display:flex;
	justify-content:space-between;
	padding-right:50px;
`

const Logo = styled.img`
	height:9vh;
	width:8vw;
	margin-left:10px;
`

const TituloHeader = styled.h2`
	color:#FFFFFF;
	margin-top:2rem;
`

const temaHeader = createMuiTheme({
	palette: {
		primary:{
			main:'#FFFFFF'
		}
	}
})

export default function Header() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<MainHeader>
			<Logo src={require('../img/futurecar.png')} alt="logo-da-marca" />
			<TituloHeader>FutureCar - Aqui você encontra o seu futuro carro</TituloHeader>
			<MuiThemeProvider theme={temaHeader}>				
				<Button color='primary' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					Menu
			</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Home</MenuItem>
					<MenuItem onClick={handleClose}>Comprar Veículo</MenuItem>
					<MenuItem onClick={handleClose}>Vender Veículo</MenuItem>
				</Menu>
			</MuiThemeProvider>
		</MainHeader>
	)
}