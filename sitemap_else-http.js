var request = require('request'),
    cheerio = require('cheerio');
 
target = "http://masterscoopers.com"
request(target, function(error, response, html) {
  // Hand the HTML response off to Cheerio and assign that to
  //  a local $ variable to provide familiar jQuery syntax.

	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);

		var layerOne = function(){
			links = [];
			var originLinks = [];

			// search all things and find content of every href
			$(html).find('*').each(function() {
				var url = $(this).attr('href');
				if (url == undefined){
				} else if (url[0] + url[1] + url[2] + url[3] == "http") {
					links.push(url);
				} else if (url[0] + url[1] + url[2] == "www") {
					links.push(url);
				} else if (url[0] != "/") {
					links.push(target + "/" + url);
				} else {
					links.push(target + url);
					return links
				}
			});
			console.log("Round 1 Links: " + "\n" + links)
			console.log()



			for(var i = 0; i < links.length ; i++){
				request(links[i], function(error, response, html){
					if (!error && response.statusCode == 200) {
						$(html).find('*').each(function() {


						var url = $(this).attr('href');
						if (url == undefined){
						// the challenge here is to 
						// remove repeat urls that will appear in sub-pages
						} else if (url == links){
							console.log('repeat');

						} else if (url[0] + url[1] + url[2] + url[3] == "http") {
							links.push(url);
						} else if (url[0] + url[1] + url[2] == "www") {
							links.push(url);
						} else if (url[0] != "/") {
							links.push(target + "/" + url);
						} else {
							links.push(target + url);
							console.log(url);
							// console.log();
							// console.log("links: " + "\n" + links[i]);
							return links


						}


						});
						// console.log(links)
						// console.log()
						// console.log()
					};
				})
			}
		};
	};

layerOne();

});