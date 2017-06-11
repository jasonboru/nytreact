import React, {Component} from 'react';
import SearchResult from './grandchildren/searchResult.js';

class Results extends Component	{
	constructor(props){
		super(props);

		this.showResults = this.showResults.bind(this);
	}

	showResults(){
		if(this.props.res){
			return this.props.res.map((x, i) => <SearchResult key={i} title={x.headline.main} lead_p={x.lead_paragraph} link={x.web_url}/>);
		}
		return "Search results to go here."
	}

	render(){
		return (
			<div className="panel panel-default">
  			  <div className="panel-heading">
    			<h3 className="panel-title text-center">Results</h3>
  			  </div>
  			  <div className="panel-body">
    			<div id="searchResults" className="containter">
    				{this.showResults()}
    			</div>
  			  </div>
			</div>
		)
	}
}

module.exports = Results;
