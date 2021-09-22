const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required"],
        min:[3, "Author's name must be at least 3 characters."]
    },    
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);