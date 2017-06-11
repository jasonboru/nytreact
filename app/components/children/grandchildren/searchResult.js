import React, {Component} from 'react';
import helpers from '../../utils/helpers.js';

class SearchResult extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		helpers.postArticle(this.props.title, this.props.link, this.props.lead_p).then(function(data){
				console.log("searchResult component data: " + data);
		}.bind(this));
	}

	render(){
		return (
			<div className="panel panel-default">
  			  <div className="panel-heading">
    			<h3 className="panel-title text-center">{this.props.title}</h3>
  			  </div>
  			  <div className="panel-body">
  			  	<p>{this.props.lead_p}</p>
  			  	<a href={this.props.link}>{this.props.link}</a>
  			  	<button className="btn btn-success pull-right" onClick={this.handleClick}>Save Article</button>
  			  </div>
			</div>
		)
	}
}

module.exports = SearchResult;
