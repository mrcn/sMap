var request = require('request'),
    cheerio = require('cheerio');
 
request('http://masterscoopers.com/', function(error, response, html) {
  // Hand the HTML response off to Cheerio and assign that to
  //  a local $ variable to provide familiar jQuery syntax.

  if (!error && response.statusCode == 200) {
  	// console.log(html);	

	var $ = cheerio.load(html);

	console.log('\n' + 'Image Maps');

	$(html).find('area').each(function() {
		console.log($(this).attr('href'));	
		request($(this).attr('href'), function(error, response, html) {
	});



	console.log('\n' + 'A Href');

	$(html).find('a').each(function() {
		console.log($(this).attr('href'));
	});


	}


});