import React from 'react';
import styled from 'styled-components';
import Phone from "@material-ui/icons/PhoneAndroid"


const Footers = styled.footer`
height: 12vh;
background-color: #003152;
display: flex;
justify-content: space-between;
color:white;
align-items: center;
bottom:0;
`
const Logo = styled.img`
	height:9vh;
	width:8vw;
	margin-left:10px;
	border-radius:50%;
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
display:flex;
align-items:center;
`
const SocialWrapper = styled.div`
display:flex;
align-items:center;
`

export default function Footer() {
	return (
		<Footers>
			<Logo src={require('../img/futurecar.png')} />
			<TextFooter>
				Somos a melhor empresa no pós venda de carros segundo a revista Carros.SA
			</TextFooter>
			<SocialWrapper>
				<span>Redes sociais:</span>
				<IconSocialNetwork src={require('../img/iconFace.svg')} />
				<IconSocialNetwork src={require('../img/iconInstagram.svg')} />
			</SocialWrapper>
			<ContactWrapper>
				<Phone />
				<span>
					(55)31XXXX-XXXX
				</span>				
			</ContactWrapper>
		</Footers>
	)
}