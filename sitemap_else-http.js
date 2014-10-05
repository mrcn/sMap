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
			var originLinks = [];

			// search all things and find content of every href
			$(html).find('*').each(originLinks = function() {
				var url = $(this).attr('href');
				if (url == undefined){
				// looking to see if i can match the first few 
				// characters of the path, this will determine 2 things
				// 1) whether or not i add the URL to the beginning of the path
				// 2) whether or not it belongs to the sitemap.
				} else if (url[0] + url[1] + url[2] + url[3] + url[4] == "http:") {
					console.log("http: match!")
					links.push(url);
				} else if (url[0] + url[1] + url[2] + url [3] == "www.") {
					console.log("www. match!")
					links.push(url);
				} else {
					links.push(target + url);
					return links
				}
			});
			console.log("originLinks: " + originLinks)
			console.log()
			console.log()
			console.log()
			console.log()
			// console.log(links.length)
			// console.log(links)


			for(var i = 0; i < links.length ; i++){
				request(links[i], function(error, response, html){
					if (!error && response.statusCode == 200) {
						$(html).find('*').each(function() {


						var url = $(this).attr('href');
						if (url == undefined){
						// looking to see if i can match the first few 
						// characters of the path, this will determine 2 things
						// 1) whether or not i add the URL to the beginning of the path
						// 2) whether or not it belongs to the sitemap.
						} else if (url[0] + url[1] + url[2] + url[3] + url[4] == "http:") {
							console.log("http: match!")
							links.push(url);
						} else if (url[0] + url[1] + url[2] + url [3] == "www.") {
							console.log("www. match!")
							links.push(url);
						} else {
							links.push(target + url);
							return links
						}


						});
						// console.log(links.length)
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