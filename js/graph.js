$(document).ready(function() {
// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
//
// This chart needs to be generated AFTER THE DATA IS RETURNED!
//
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,190,220,1)",
            pointColor: "rgba(220,190,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40, 67]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,255,1)",
            pointColor: "rgba(151,187,235,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90, 45]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,167,205,0.2)",
            strokeColor: "rgba(151,167,255,1)",
            pointColor: "rgba(151,167,235,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [32, 67, 23, 89, 90, 50, 91, 56]
        }
    ]
};

var myLineChart = new Chart(ctx).Line(data);


var apiKey = "5A3F06BA770E81ECBE0185475ED9F2B6";
//Revenue
$.ajax({
  url: 'http://api.eia.gov/series/?api_key=' + apiKey + '&series_id=ELEC.PRICE.CO-RES.M',
  dataType: 'json',
  success: function(data) {
  	// when API data comes back call this functon
  	responseElectricCost(data);
  }
});


function responseElectricCost(data){
	var monthlyElectricCost = [];
	var months = [];
	for(var i = 0; i < 8; i++) {
		// array for colorado monthly electrical cost
		monthlyElectricCost.push(data.series[0].data[i][1]);
		// array for dates
		months.push(data.series[0].data[i][0]);
	}
	return calculateE(monthlyElectricCost, months);
}

function calculateE(costArr, monthArr) {
	
}

});