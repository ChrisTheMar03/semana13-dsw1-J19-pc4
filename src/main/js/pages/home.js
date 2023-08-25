const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { detalles: [] };
	}

	componentDidMount() {

		client({ method: 'GET', path: '/api/detalleventas/formacion' }).done(response => {
			this.setState({ detalles: response.entity });
		});

	}
	render() {
		return (
			<>
				<h1>Semana 13 App</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100%)"}}>
						<Titulo entidad="Detalles" emoji="🎸" />
						<DetalleList detalles={this.state.detalles} />
						<Link to={"/agregar"}>Agregar</Link> 
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class DetalleList extends React.Component {
	render() {
		const detalls = this.props.detalles.map(det =>
			<Detalle key={det.ID} detalle={det} />
		);
		
		return (
		
			<table border="1">
				<tbody>
					<tr>
						<th>ID</th>
						<th>NOMBRE</th>
						<th>CANTIDAD</th>
					</tr>
					{detalls}
				</tbody>
			</table>
		
		)
	}
}


class Detalle extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.detalle.ID}</td>
				<td>{this.props.detalle.PRODUCTO}</td>
				<td>{this.props.detalle.CANTIDAD}</td>
			</tr>
		)
	}
}


module.exports = HomePage;