/*var api = "https://api.spoonacular.com/food/wine/pairing?food=";
var food = 'steak';
var url = api + food;


$.ajax({
  type: 'POST',
  url: "https://api.spoonacular.com/food/wine/pairing?food=steak",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "444a2f3a2emsh107ff3044c6d3bep1bc38bjsnfc7f20f2c8a5"
  }
  success: function(data) {
    console.log(data);
  }
  error: function(data){
    alert("error" + data.error)
  }
});
*/
var upc = upccode;

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://nutritionix-api.p.rapidapi.com/v1_1/item?upc="+upc,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
		"x-rapidapi-key": "444a2f3a2emsh107ff3044c6d3bep1bc38bjsnfc7f20f2c8a5"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
