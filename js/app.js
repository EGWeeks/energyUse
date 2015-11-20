$(document).ready(function() {
	 if(document.location.search) {
    var queryString = document.location.search.replace('?', '');
    var pairs = queryString.split('&').map(function (pair) {
      return values(pair.split('='));
    });
  }

  function values(arr) {
  	var formVal = [];
  	formVal.push(arr[1]);
  	return formVal;
  }

});