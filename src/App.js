import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/AppContainer'
import HomePage from './components/HomePage'

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
		switch (pag) {
			case 'home':
				return <HomePage />
			case 'sellCar':
				return ''// Página de venda de carro
			case 'buyCar':
				return '' //Página de compra de carro
		}
	}
	hendleChangePage = (e) =>{ 
		const newPag = e.target.value //verificar se ta pegando o valor da página 
		this.setState({
			pagRender : newPag
		})
		this.hendleRenderPage()
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
