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
	return mainKWH(monthlyElectricCost, months);
}


function userData() {
    var aveCost = [];
	var nov = $('.cost').text();
    //parseFloat so the nov values do not concat
    var num = parseFloat(nov) + (nov * 0.16685);
    console.log(num);

	
}
userData();


// Graphing API calls 
function mainKWH(costArr, timeArr) {
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
	
	// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
//
// This chart needs to be generated AFTER THE DATA IS RETURNED!
//
var data = {
    labels: [ "June","july", "August", "September", "October", "November", "December", "January", "Febuary", "March", "April", "May"],
    datasets: [
        {
            label: "Colorado average electric cost",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,190,220,1)",
            pointColor: "rgba(220,190,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [coloradoEBill.june, coloradoEBill.july, coloradoEBill.august, coloradoEBill.sept, coloradoEBill.oct, coloradoEBill.nov, coloradoEBill.dec, coloradoEBill.jan, coloradoEBill.feb, coloradoEBill.march, coloradoEBill.april, coloradoEBill.may]
        }
        // National Average 
    ]
};

var myLineChart = new Chart(ctx).Line(data);
}


// Bar graph 
// Two Api calls 
// One for each state
// Info get compared side by side
// monthly state total usage get returned
//
//
//

var firstState = "CO";

var responseCount = 0;
var fMonthStateUsage = [];
var sMonthStateUsage = [];

//state kilowatt usage
$.ajax({
  url: 'http://api.eia.gov/series/?api_key=' + apiKey + '&series_id=ELEC.SALES.'+firstState+'-RES.M',
  dataType: 'json',
  success: function(data) {
    // when API data comes back call this functon
    responseFirstState(data);
  }
});

var secondState = "AK";
//state kilowatt usage
$.ajax({
  url: 'http://api.eia.gov/series/?api_key=' + apiKey + '&series_id=ELEC.SALES.'+secondState+'-RES.M',
  dataType: 'json',
  success: function(data) {
    // when API data comes back call this functon
    responseSecondState(data);
  }
});

function responseFirstState(data) {
    // response count keep count of each response function
    responseCount++;
    var fTimeInMonths = [];
    fMonthStateUsage = [];
    for(var i = 0; i < 12; i++) {
        fMonthStateUsage.push(data.series[0].data[i][1]);
        fTimeInMonths.push(data.series[0].data[i][0]);
    }
    // will only return is responceCount is greater than 1 meaning both API requested have responded!!
    if(responseCount > 1){
        return barGraph(fMonthStateUsage, sMonthStateUsage, fTimeInMonths); 
    }
    
}



// takes the second state api data and stores dates and usage into array
function responseSecondState(data) {
    // response count keep count of each response function
    responseCount++;
    //declaring array to loop and store state kilowatt used and 
    var sTimeInMonths = [];
    sMonthStateUsage = [];
    for(var i = 0; i < 12; i++) {
        sMonthStateUsage.push(data.series[0].data[i][1]);
        sTimeInMonths.push(data.series[0].data[i][0]);
    }
    // will only return is responceCount is greater than 1 meaning both API requested have responded!!
    if(responseCount > 1){
        return barGraph(fMonthStateUsage, sMonthStateUsage, sTimeInMonths); 
    }
}



// Take the array data and creates a bar graph with it
function barGraph(fUsageArr, sUsageArr, months) {
    // get the canvas tag id
    var ctx = $('#myBarChart').get(0).getContext('2d');

    var data = {
    labels: ["August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "First State Picked",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [fUsageArr[11], fUsageArr[10], fUsageArr[9], fUsageArr[8], fUsageArr[7], fUsageArr[6], fUsageArr[5], fUsageArr[4], fUsageArr[3], fUsageArr[2], fUsageArr[1], fUsageArr[0]]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [sUsageArr[11], sUsageArr[10], sUsageArr[9], sUsageArr[8], sUsageArr[7], sUsageArr[6], sUsageArr[5], sUsageArr[4], sUsageArr[3], sUsageArr[2], sUsageArr[1], sUsageArr[0]]
        }
    ]
};
    //create new chart
    var myBarChart = new Chart(ctx).Bar(data);
}
});