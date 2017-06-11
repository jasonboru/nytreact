import React, {Component} from 'react';

class Saved extends Component	{
	constructor(){
		super();
	}

	render(){
		return (
			<div className="panel panel-default">
  			  <div className="panel-heading">
    			<h3 className="panel-title text-center">Saved</h3>
  			  </div>
  			  <div className="panel-body">
    				Saved articles to go here
  			  </div>
			</div>
		)
	}
}

module.exports = Saved;
