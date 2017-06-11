import React, {Component} from 'react';
import Search from './children/search.js';
import Results from './children/results.js';
import Saved from './children/saved.js';
import helpers from './utils/helpers.js';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {query: '', startDate: '', endDate: '', res: null};

		this.setQuery = this.setQuery.bind(this);
		this.setStart = this.setStart.bind(this);
		this.setEnd = this.setEnd.bind(this);
		this.resetRes = this.resetRes.bind(this);
	}

	componentDidUpdate() {
		if(!this.state.res){
			helpers.fetchData(this.state.query, this.state.startDate, this.state.endDate).then(function(data){
				this.setState({res: data});
			}.bind(this));
		}
	}

	setQuery(query){
		this.setState({ query: query });
	}

	setStart(start){
		this.setState({ startDate: start });
	}

	setEnd(end){
		this.setState({ endDate: end });
	}

	resetRes(){
		this.setState({res: null});
	}

	render() {
		return (
			<div className="container">
			  <Search resetRes={this.resetRes} setQuery={this.setQuery} setStart={this.setStart} setEnd={this.setEnd} />
			  <Results res={this.state.res}/>
			  <Saved />
			</div>
		)
	}

}

module.exports = Main;
