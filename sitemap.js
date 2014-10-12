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
			$(html).find('area').each(function() {
				var url = target + $(this).attr('href');
				siteUrls = [];
				siteUrls = push.(url);
					console.log(url);
			});
			$(html).find('a').each(function() {
				
				siteUrls = push.(url);
				var url = target + $(this).attr('href');
				console.log(url);
			});

			console.log(sireUrls)

		};
	};
search()
});