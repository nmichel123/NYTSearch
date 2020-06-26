
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


var article = $(this).attr("data-name");
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=TONEZkf1tgn51V71vK11iTJ1gyMdmxqR";