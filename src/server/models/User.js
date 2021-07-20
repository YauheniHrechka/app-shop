const { model, Schema } = require('mongoose');

const schemaUser = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = model('users', schemaUser);