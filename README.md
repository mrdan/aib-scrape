AIB Scrape
============

Based off http://www.nicklocascio.com/blog/2013/02/02/make-a-data-scraper-bookmarklet/

You need to create a bookmark and edit it's url to match: javascript:(function(){if(window.myBookmarklet!==undefined){myBookmarklet();}else{document.body.appendChild(document.createElement('script')).src='[YOUR JS SOURCE PATH]}';}})();
