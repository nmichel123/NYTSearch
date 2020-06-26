$.ajax({

    'type': 'GET',
    'url': queryUrl,
    method: "GET",
    data: {
        'q': queryString,
        'response-format': "jsonp",
        'api-key': "TONEZkf1tgn51V71vK11iTJ1gyMdmxq",
        'callback': 'svc_search_v2_articlesearch'
    },
        success: function(data) {
        // passed function object for data processing 
        console.log(data);
    }
});