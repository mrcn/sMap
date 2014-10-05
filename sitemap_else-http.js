var request = require('request'),
    cheerio = require('cheerio');
 
target = "http://masterscoopers.com/"
request(target, function(error, response, html) {
  // Hand the HTML response off to Cheerio and assign that to
  //  a local $ variable to provide familiar jQuery syntax.

	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);

		var layerOne = function(){
			links = [];

			// search all things and find content of every href
			$(html).find('*').each(function() {
				var url = $(this).attr('href');
				if (url == undefined){
				} else {
					links.push(target + url);
					return links
					console.log(url)
				}
			});
			console.log()
			console.log()
			console.log(links.length)
			console.log(links)


			// for(var i = 0; i < links.length ; i++){
			// 	request(links[i], function(error, response, html){
			// 		if (!error && response.statusCode == 200) {
			// 			$(html).find('*').each(function() {
			// 				var url = $(this).attr('href');
			// 				if (url == undefined){
			// 				} else {
			// 					links.push(target + url);
			// 					return links
			// 				}
			// 			});
			// 			console.log(links.length)
			// 			console.log(links)
			// console.log()
			// console.log()
			// 		};
			// 	})
			// }
		};
	};

layerOne();

});