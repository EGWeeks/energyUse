$(document).ready(function() {
	if(document.location.search) {
    	var queryString = document.location.search.replace('?', '');

    	var keyValue = queryString.split('&');
    	var formOBJ = {};
    	keyValue.forEach(function(item) {
    		var values = item.split('=');
    		console.log(values);
    		formOBJ[values[0]] = values[1];

    	});
    	console.log(formOBJ);

    // var pairs = queryString.split('&').map(function (pair) {
    //   console.log(pair.split('='));
    //   return pair.split('=');
    // });

    	// console.log(pairs);

  	}
});
  // function values(arr) {
  // 	var formVal = [];
  // 	formVal.push(arr[1]);
  // 	console.log(formVal);
  // }

  // [
  // 	['firstName', 'bob'],
  // 	['lastName', 'barker'],
  // 	[key, value]
  // ]





// var oldArry = [1,2,3,4,5];

// var newArry = [];

// for(var i = 0; i < oldArry.length; i++){
// 	if(i % 2 === 0){
// 		newArry.push(oldArry[i]);	
// 	}
// }
// console.log(newArry);

// var mapArray = oldArry.map(function(item, index, array){
// 	if(index % 2 === 0){
// 		return item;
// 	}
// });
// console.log(mapArray);