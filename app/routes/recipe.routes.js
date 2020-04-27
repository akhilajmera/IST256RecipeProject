module.exports = (app) => {
    const recipes = require('../controllers/recipe.controller.js');

    // Create a new recipe
    app.post('/recipes', recipes.create);

    // Retrieve all recipes
    app.get('/recipes', recipes.findAll);

    // Retrieve a single recipe with recipeId
    app.get('/recipes/:recipeId', recipes.findOne);

    // Update a recipe with recipeId
    app.put('/recipes/:recipeId', recipes.update);

    // Delete a recipe with recipeId
    app.delete('/recipes/:recipeId', recipes.delete);
}
