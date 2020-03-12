import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/AppContainer'
import HomePage from './components/HomePage'
import PageSalerRegister from './components/PageSalerRegister'
import BuyACar from './components/BuyACar'
import Header from './components/Header'
import Footer from './components/Footer'

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const theme = createMuiTheme()

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pagRender: 'home'
		}
	}
	handleRenderPage = () => {
		const pag = this.state.pagRender
		
		switch (pag) {
			case 'home':
				return <HomePage
				handleChangePage = {this.handleChangePage}
				 />
			case 'sellCar':
				return <PageSalerRegister
				handleChangePage = {this.handleChangePage}
				 />
			case 'buyCar':
				return( <BuyACar
					handleChangePage = {this.handleChangePage}
				 />)
		}
	}
	handleChangePage = (idPag) =>{ 
		const newPag = idPag
		this.setState({
			pagRender : newPag
		})
		
	}
	render() {
		return (
			<JssProvider jss={jss} generateClassName={generateClassName}>
				<MuiThemeProvider theme={theme}>
					<Header handleChangePage = {this.handleChangePage} />
					{this.handleRenderPage()}
					<CssBaseline />
					<AppContainer />
					<Footer />					
				</MuiThemeProvider>				
			</JssProvider>
		)
	}
}

export default App