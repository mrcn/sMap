var request = require('request'),
    cheerio = require('cheerio');
 
target = "http://masterscoopers.com/"
request(target, function(error, response, html) {
  // Hand the HTML response off to Cheerio and assign that to
  //  a local $ variable to provide familiar jQuery syntax.

  if (!error && response.statusCode == 200) {
  	// console.log(html);	

	var $ = cheerio.load(html);

		var search = function(){
			// finding links from imagemaps
			$(html).find('*').each(function() {
				var url = $(this).attr('href');
				if (url == undefined){
					var trash = url;
				} else {
					var url = target + url;
					console.log(url);
				}
			});
		};
	};

search();
});