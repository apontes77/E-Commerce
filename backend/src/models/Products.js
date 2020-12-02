const mongoose = require('../database')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    valueUnit: {
        type: Number
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    file_name: {
        type: String,
        required: true
    },
    file_url: {
        type: String,
        required: true
    }
})

const Product =  mongoose.model('Product', ProductSchema)

module.exports = Product