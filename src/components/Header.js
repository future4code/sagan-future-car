import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Headers = styled.header`
	background:royalblue;
	height:10vh;
	display:flex;
	justify-content:space-between;
`

const Logo = styled.img`
	height:9vh;
	width:8vw;
	margin-left:10px;
`

export default function Header() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Headers>
			<Logo src={require('../img/futurecar.png')} alt="logo-da-marca" />
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
				<MenuItem onClick={handleClose}>Comprar</MenuItem>
				<MenuItem onClick={handleClose}>Vender</MenuItem>
			</Menu>
		</Headers>
	)
}