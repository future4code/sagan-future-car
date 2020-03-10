import React from 'react';
import styled from 'styled-components';
import Phone from "@material-ui/icons/PhoneAndroid"


const Footers = styled.footer`
height: 12vh;
background-color: #091E28;
display: flex;
justify-content: space-between;
color:white;
align-items: center;
position:absolute;
bottom:0;
width: 100vw;
`
const Logo = styled.img`
	height:9vh;
	width:8vw;
	margin-left:10px;
	`
const IconSocialNetwork = styled.img`
width: 25px;
margin-left: 10px;

`
const TextFooter = styled.p`
color: white;
`
const ContactWrapper = styled.div`
margin-right: 10px;
`
export default function Footer() {
	return (
		<Footers>
			<Logo src={require('../img/futurecar.png')} />
			<TextFooter>
				Somos a melhor empresa no pós venda de carros segundo a revista Carros.SA
			</TextFooter>

			<div>
				<span>Redes sociais:</span>
				<IconSocialNetwork src={require('../img/iconFace.svg')} />
				<IconSocialNetwork src={require('../img/iconInstagram.svg')} />
			</div>
			<ContactWrapper>
				<Phone />
				<span>
					(55)31XXXX-XXXX
				</span>
				
			</ContactWrapper>
		</Footers>
	)
}