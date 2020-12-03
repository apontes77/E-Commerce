const mongoose = require('../database')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: { 
        type: Number, required: true
        
    },
    description: {
        type: String, required: true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0
    },
    brand: {
        type: String, required: false
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