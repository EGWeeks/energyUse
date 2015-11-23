$(document).ready(function() {



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

// gets the last 8  month of electric cost and dates
function responseElectricCost(data){
	var monthlyElectricCost = [];
	var months = [];
	for(var i = 0; i < 8; i++) {
		// array for colorado monthly electrical cost
		monthlyElectricCost.push(data.series[0].data[i][1]);
		// array for dates
		months.push(data.series[0].data[i][0]);
	}
	return graphKWH(monthlyElectricCost, months);
}


function userData() {
	var userKWH = $('.kwh').text();
}
userData();


// Graphing API calls 
function graphKWH(costArr, timeArr) {
	var coloradoEBill = {
	jan : 91.10,
	feb : 74.76,
	march : 80.99,
	april : 78.94,
	may : 84.15,
	june : 99.57,
	july : 113.83,
	august : 112.65,
	sept : 76.02,
	oct  : 69.41,
	nov : 79.47,
	dec : 92.73,
};
	console.log(costArr);
	console.log(timeArr);
	// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
//
// This chart needs to be generated AFTER THE DATA IS RETURNED!
//
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Colorado average electric cost per kWh",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,190,220,1)",
            pointColor: "rgba(220,190,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [coloradoEBill.jan, coloradoEBill.feb, coloradoEBill.march, coloradoEBill.april, coloradoEBill.may, coloradoEBill.june, coloradoEBill.july, coloradoEBill.august, coloradoEBill.sept, coloradoEBill.oct, coloradoEBill.nov, coloradoEBill.dec]
        },
    ]
};

var myLineChart = new Chart(ctx).Line(data);
}

});