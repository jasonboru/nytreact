import React, {Component} from 'react';

class Search extends Component {
	constructor(){
		super();
		this.state = {
			query: '',
			startDate: '',
			endDate: ''
		}
		this.handleTopicChange = this.handleTopicChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTopicChange(event){
		this.setState({query: event.target.value});
	}

	handleStartDateChange(event){
		this.setState({startDate: event.target.value});
	}

	handleEndDateChange(event){
		this.setState({endDate: event.target.value});
	}

	handleSubmit() {
		var newStart = this.state.startDate + '0101';
		var newEnd = this.state.endDate + '1231';
		this.props.setStart(newStart);
		this.props.setEnd(newEnd);
		this.props.setQuery(this.state.query);
		this.props.resetRes();
		this.setState({ query: '', startDate: '', endDate: '' });
	}

	render(){
		return (

		  <div className="panel panel-default">
				<div className="panel-heading">
			  <h3 className="panel-title text-center">Search</h3>
				</div>
				<div className="panel-body">
		      <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit();}}>
		  	    <div className="form-group">
		          <label htmlFor="topic">Topic</label>
		          <input value={this.state.query} onChange={this.handleTopicChange} className="form-control" id="topic" placeholder="example: Trump" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="start-year">Start Year</label>
		          <input value={this.state.startDate} onChange={this.handleStartDateChange} className="form-control" id="start-year" placeholder="YYYY" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="end-year">End Year</label>
		          <input value={this.state.endDate} onChange={this.handleEndDateChange} className="form-control" id="end-year" placeholder="YYYY" />
		        </div>
		       	<button type="submit" className="btn btn-success">Submit</button>
			      </form>
		    </div>
		  </div>

		)
	}
}

module.exports = Search;
