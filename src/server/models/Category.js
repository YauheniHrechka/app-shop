const { model, Schema } = require('mongoose');

const schemaCategory = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('categories', schemaCategory);