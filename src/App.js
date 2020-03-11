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
	hendleRenderPage = () => {
		const pag = this.state.pagRender
		console.log(pag)
		switch (pag) {
			case 'home':
				return <HomePage
				hendleChangePage = {this.hendleChangePage}
				 />
			case 'sellCar':
				return <PageSalerRegister
				hendleChangePage = {this.hendleChangePage}
				 />
			case 'buyCar':
				return( <BuyACar
					hendleChangePage = {this.hendleChangePage}
				 />)
		}
	}
	hendleChangePage = (idPag) =>{ 
		const newPag = idPag //verificar se ta pegando o valor da página 
		this.setState({
			pagRender : newPag
		})
		
	}
	render() {
		return (
			<JssProvider jss={jss} generateClassName={generateClassName}>
				<MuiThemeProvider theme={theme}>
					{this.hendleRenderPage()}
					<CssBaseline />
					<AppContainer />
				</MuiThemeProvider>
			</JssProvider>
		)
	}
}

export default App
