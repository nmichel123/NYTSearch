var article = $(this).attr("data-name");
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=TONEZkf1tgn51V71vK11iTJ1gyMdmxqR";

$.ajax({

    'type': 'GET',
    'url': queryUrl,
    data: {
        'q': queryString,
        'response-format': "jsonp",
        'api-key': "TONEZkf1tgn51V71vK11iTJ1gyMdmxqR",
        'callback': 'svc_search_v2_articlesearch'
    },
        success: function(data) {
        // passed function object for data processing 
        console.log(data);

        
    }
});

//retrieve data from ajax 

//then create div's recursively

//popululate search result divs with retreived data
