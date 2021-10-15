import { React, Component } from 'react';
import axios from 'axios';

class Fib extends Component {
	state = {
		seenIndexes: [],
		values: {},
		index: ''
	};

	componentDidMount() {
		this.fetchValues();
		this.fetchIndexes();
	}

	async fetchValues() {
		const values = await axios.get('/api/values/current');
		console.log(values);
		this.setState({values: values.data});
	}

	async fetchIndexes() {
		const seenIndexes = await axios.get('/api/values/all');
		console.log(seenIndexes);
		this.setState({
			seenIndexes: seenIndexes.data
		});
	};

	renderSeenIndexes() {
		return this.state.seenIndexes.map( ({number}) => number).join(', ');
	};

	renderValues() {
		return Object.keys(this.state.values).map(key => {
			return (<p key={key}>For index {key} I calculated {this.state.values[key]}</p>);
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		await axios.post('/api/values', {
			index: this.state.index
		});

		this.setState({index: ''});
	}

	render() {
		return (
			<div>
			<section>
			  <form onSubmit={this.handleSubmit}>
			    <label htmlFor="number">Enter your index:</label>
			    <input type="number" id="number"
			      values={this.state.index}
			      onChange={event => this.setState({index: event.target.value})}
			    / >
			    <button>Submit</button>
			  </form>
			</section>

			<section>
			  <h3>Indices I have seen:</h3>
			  <p>{this.renderSeenIndexes()}</p>
			</section>

			<section>
			  <h3>Calculated values:</h3>
			  {this.renderValues()}
			</section>
			</div>
		);
	}
}

export default Fib;
