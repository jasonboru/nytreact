import 'whatwg-fetch';

var helper = {

  	fetchData: function(query, startDate, endDate){

	  	return new Promise(function(resolve, reject){
		   	fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${query}&begin_date=${startDate}&end_date=${endDate}`)
		      .then(response => response.json())
		      .then((responseData) => {
		        resolve(responseData.response.docs);
		      })
		      .catch(err => console.log(err));
	  	});
  	},

  	postArticle: function(title, link, lead_p) {
  		var body = JSON.stringify({title: title, link: link, lead_p: lead_p});

		var myInit = {
			method: "POST",
			headers: {
        		'Accept': 'application/json',
        		'Content-Type': 'application/json'
      		},
			body: body
		}

		console.log(myInit);

		var articlePostRequest = new Request("/api/saved", myInit);

  		return new Promise(function(resolve, reject){
  			fetch(articlePostRequest)

  				.then(response => response.json())
  				.then((responseData) => {
  					console.log("helper responseData: " + responseData);
					resolve(responseData);
				})
				.catch(err => console.log(err));
  		});
	}
};

module.exports = helper;
