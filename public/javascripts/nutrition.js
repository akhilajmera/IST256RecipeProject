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
function myFunction(){
var upc = parseInt(document.getElementById("upccode").value);

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
  document.getElementById("bname").innerHTML = response.brand_name;
  document.getElementById("iname").innerHTML = response.item_name;
  document.getElementById("calories").innerHTML = response.nf_calories;
  document.getElementById("ingredients").innerHTML = response.nf_ingredient_statement;
  console.log(response);
});
}
