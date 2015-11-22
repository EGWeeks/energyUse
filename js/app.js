$(document).ready(function() {
	
	var formToOBJ = function() {
		var formOBJ = {};
		if(document.location.search) {
			// get everything in the url AFTER the ?
	  	var queryString = document.location.search.replace('?', '');
			var keyValue = queryString.split('&');    	
	  	// loop through KeyValue arr, put each value into prop and value OBJ
	  	keyValue.forEach(function(item) {
	  		var values = item.split('=');
	  		formOBJ[values[0]] = values[1];
			});
	  }
	  return formOBJ;
	};
	var formReturn = formToOBJ();
	//How would I access the returned OBJ from var.
});