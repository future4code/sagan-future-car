import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

const myTheme = createMuiTheme({
	primary: {
		main: "#0EAD83"
	},
	secondary: {
		main: "#CC5433"
	}
});

const ContainerRegister = styled.div`
  background-color: #FAFAFA;
  display: flex;
  justify-content:center;
  margin-top:5rem;
  
`;

const Titulo = styled.h2`
	text-align:center;
	
`

const DivPai = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;      
  padding: 15px;
  width:450px;
  height:450px; 
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top:3rem;
`;

class PageSalerRegister extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: undefined,
			name: "",
			description: "",
			paymentMethod: "",
			shipping: "",
			price: ""
		};
	}

	handleName = event => {
		const newName = event.target.value;
		this.setState({ name: newName });
	};

	handleDescription = event => {
		const newDescription = event.target.value;
		this.setState({ description: newDescription });
	};

	handlePaymentMethod = event => {
		const newPaymentMethod = event.target.value;
		this.setState({ paymentMethod: newPaymentMethod });
	};

	handleShipping = event => {
		const newShipping = event.target.value;
		this.setState({ shipping: newShipping });
	};

	handlePrice = event => {
		const newPrice = event.target.value;
		this.setState({ price: newPrice });
	};

	postNewRegister = () => {
		const newCar = {
			name: this.state.name,
			description: this.state.description,
			price: this.state.price,
			paymentMethod: this.state.paymentMethod,
			shipping: this.state.shipping
		};
		const request = axios.post(
			`https://us-central1-future-apis.cloudfunctions.net/futureCar/cars`,
			newCar
		);
		request
			.then(reponse => {
				alert("Cadastro feito com sucesso!");
				this.setState({
					id: undefined,
					name: "",
					description: "",
					paymentMethod: "",
					shipping: "",
					price: ""
				})
			})
			.catch(error => {
				console.log(error.message);
				alert("Erro ao cadastrar!");
			});
	};

	render() {
		return (
			<div>
				<div>
					<Header handleChangePage = {this.props.handleChangePage}/>
					<ContainerRegister>
						<DivPai>
							<Titulo>Cadastre o seu veículo</Titulo>
							<input
								placeholder="Nome"
								onChange={this.handleName}
								value={this.state.name}
								type="text"
							/>
							<input
								placeholder="Método de pagamento"
								onChange={this.handlePaymentMethod}
								value={this.state.paymentMethod}
								type="text"
							/>
							<input
								placeholder="Prazo de entrega"
								onChange={this.handleShipping}
								value={this.state.shipping}
								type="text"
							/>
							<input
								placeholder="Preço"
								onChange={this.handlePrice}
								value={this.state.price}
								type="text"
							/>
							<textarea
								placeholder="Descrição do carro"
								onChange={this.handleDescription}
								value={this.state.description}
								type="text"
								rows="10"
								cols="20"
							/>
							{/* <p>Cadastro do vendedor</p>
            <input placeholder="Nome" /> */}
						</DivPai>
					</ContainerRegister>
					<Footer />
				</div>
				<MuiThemeProvider theme={myTheme}>
					<ContainerButtons>
						<Button color="secondary" size="medium" variant="contained" main onClick={() => this.props.handleChangePage("home")}>
							Voltar
            </Button>
						<Button
							onClick={this.postNewRegister}
							color="primary"
							size="medium"
							variant="contained"
						>
							Cadastrar
            </Button>
					</ContainerButtons>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default PageSalerRegister;