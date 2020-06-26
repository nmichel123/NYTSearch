var article = $(this).attr("data-name");
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=TONEZkf1tgn51V71vK11iTJ1gyMdmxqR";
var queryString = "";
var numResults = 10;
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
function renderSearch() {
    
    for(i = 0; i < numResults; i++){
        //then create div's recursively
        var newDiv = $('<div>');

        newDiv.attr("id", "search-result-"+i);
        newDiv.addClass("result-divs");

        //popululate search result divs with retreived data
        var result = "test-" + i //add in text content HERE
        
        var pTag = $('<p>');
        var stuff = pTag.text(result);

        var push = newDiv.append(stuff);

        $('#top-articles').append(push);
    }
}



