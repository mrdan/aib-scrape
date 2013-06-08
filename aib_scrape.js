(function(){

  // the minimum version of jQuery we want
  var v = "1.9.0";

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
      var done = false;
      var script = document.createElement("script");
      script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
      script.onload = script.onreadystatechange = function(){
          if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
              done = true;
              initMyBookmarklet();
          }
      };
      document.getElementsByTagName("head")[0].appendChild(script);
  } else {
      initMyBookmarklet();
  }
  
  function initMyBookmarklet() {
      (window.myBookmarklet = function() {
          scrapePage();
      })();
  }

  var scrapePage = function() {
    var csvString = '';
    var csvPrefixHeader = '"Date"' + ',' + ' "Name"' + ',' + ' "Outgoing"' + ',' + ' "Incoming"\n';
    csvString +=csvPrefixHeader;

    $('tbody > tr.jext01, tbody > tr.ext01').each(function () {
      var transArray = [];
      $(this).children().each(function (index) {
        var transText = $(this).text();
        transArray[index] = transText;
      });
      // date, name, out, in, balance
      // check if there's any numbers, if not we don't want it
      if (transArray[2] != "" || transArray[3] != "")
        csvString += '"'+ transArray[0] + '", "' + transArray[1] + '", "' + transArray[2] + '", "' + transArray[3] + '"\n';
    });
    location.href = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csvString);
  };

})();