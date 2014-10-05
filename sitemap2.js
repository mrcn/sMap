var request = require('request'),
    cheerio = require('cheerio');
 
target = "http://masterscoopers.com/"
request(target, function(error, response, html) {
  // Hand the HTML response off to Cheerio and assign that to
  //  a local $ variable to provide familiar jQuery syntax.

	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);

		var layerOne = function(){
			// finding links from imagemaps
			links = [];

			$(html).find('*').each(function() {
				var url = $(this).attr('href');
				if (url == undefined){
					var trash = url;
				} else {
					links.push(target + url);
					return links
				}
			});
			console.log(links)
		};
	};

layerOne();

});