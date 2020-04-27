$.ajax({
    type:"post",
    url:"/api",
    success: function(data){
      console.log(data);
    }
})

$.ajax({
  type:"get",
  url:"http://127.0.0.1:3000/recipes"
  success: function(data){
    console.log("Successfull call to get");
  }
})

$(document).ready(function(){
  loadRecipeList();
});

function loadRecipeList(){
  $.ajax({
    url:"http://127.0.0.1:3000/recipes"
    success: function(data){
      var userRecipes = document.getElementById("userRecipes");
      if (userRecipes){
        while (userRecipes.firstChild) {
          userRecipes.removeChild(userRecipes.firstChild);
        }
      }
      for (var i=0;i<data.length;i++){
        var recipeName = data[i].rname;
        var prepTime = data[i].prep;
        var cookTime = data[i].cook;
        var rIngredients = data[i].ingedients;
        var rInstructions = data[i].instructions;
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(recipeName+prepTime+cookTime+rIngedients+rInstructions));
        userRecipes.appendChild(li);
      }
    },
    error: function(data){
      alert("error" + data.error)
    }
}
