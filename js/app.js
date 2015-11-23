$(document).ready(function() {

	// Form Fields get stored in object
	function formToOBJ() {
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
	  return nameInsert(formOBJ);
	}
	formToOBJ();

	//replacuing default text with the users information
	function nameInsert(formInfo) {
		//declaring email bc jshint is picky
		var eMail;
		$('.first').text(formInfo.firstName);
		$('.last').text(" " +formInfo.lastName);
		//if email is inputted the query string will replace @ with %40
		//fixing that 
		if(formInfo.email.length !== 0) {
			eMail = formInfo.email.replace('%40', '@');
		}
		$('.email').text(eMail);
		$('.cost').text(' '+formInfo.bill);
	}
});
