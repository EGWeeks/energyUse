//LocalStorage
//storing user input
$(document).ready(function() {
	//
	var fNameValue = $('#fName').val();
	var lNameValue = $('#lName').val();
	var emailAdd = $('#email').val();

	$('#button').click(function() {

		localStorage.setItem('firstName', fNameValue);
		localStorage.setItem('lastName', lNameValue);
		localStorage.setItem('email', emailAdd);
		//ALERT
		//
		//
		//
		alert(localStorage.getItem('firstName')+ "!!!! I have infected your computer and now have all your personal information. muawhaha!");
	});

	function storageLoad() {
		//if localStorage has something in it and input is empty 
		if (localStorage !== undefined && fNameValue === '') {
			$('#fName').val(localStorage.getItem('firstName'));
		}
		if (localStorage !== undefined && lNameValue === '') {
			$('#lName').val(localStorage.getItem('lastName'));
		}
		if (localStorage !== undefined && emailAdd === '') {
			$('#email').val(localStorage.getItem('email'));
		}
	}
	storageLoad();
});

