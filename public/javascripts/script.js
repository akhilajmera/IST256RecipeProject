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
});
}

$(document).ready(function()){
  $("#submit").click(function (e){
    var formName = $("#rname").val();
    var formPrep = $("#prep").val();
    var formCook = $("#cook").val();
    var formIngredients = $("#ingredients").val();
    var formInstructions = $("#instructions").val();
    e.preventDefault();
    var data = {};
    data.rname = formName;
    data.prep = formPrep;
    data.cook = formCook;
    data.ingredients = formIngredients;
    data.instructions = formInstructions;
    console.log("Data sent:"+data.rname+data.prep+data.cook+data.ingedients+data.instructions);
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url:'http://127.0.0.1:3000/recipes',
        success: function(data){
          loadRecipeList();
          document.getElementById("recipeForm").reset();
        },
        error: function(data){
          alert("Error" + data.error)
        }
      });
  });
});
