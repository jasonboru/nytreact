import React from 'react';

import router, {
  Route,
  Router,
  hashHistory,
  IndexRoute
} = require("react-router");


var Main = require("../components/Main");
var Results = require("../components/children/results");
var Saved = require("../components/children/saved");
var Search = require("../components/children/search");
var Search_Result = require("../components/children/grandchildren/searchResult");
var Saved_Article = require("../components/children/grandchildren/savedArticle");


module.exports = (

  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      <Route path="Results" component={Results} />


      <Route path="Search_Result" component={Search_Result} />

      <IndexRoute component={Search_Result} />

      <Route path="Saved" component={Saved} />

      <Route path="Saved_Article" component={Saved_Article} />

      <IndexRoute component={Saved_Article} />

    </Route>

  </Router>
);
