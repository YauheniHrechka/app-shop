const { model, Schema } = require('mongoose');

const schemaGood = new Schema({
    modelNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = model('goods', schemaGood);