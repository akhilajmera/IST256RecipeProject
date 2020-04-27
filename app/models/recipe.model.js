const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    rname: String,
    prep: String,
    cook: String,
    ingedients: String,
    instructions: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', RecipeSchema);
