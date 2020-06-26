$.ajax({

    'type': 'GET',
    'url': queryurl,
    data: {
        'q': queryString,
        'response-format': "jsonp",
        'api-key': nytApiKey,
        'callback': 'svc_search_v2_articlesearch'
    },
        success: function(data) {
        // passed function object for data processing 
        console.log(data);
    }
});