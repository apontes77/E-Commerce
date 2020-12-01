const mongoose = require('../database')

const ItemSchema = new mongoose.Schema({
    discount: {
        type: Number,
        required: true
    },
    amount: {
        type: Number
    },
    price: {
        type: Number
    },
})

const Item =  mongoose.model('Item', ItemSchema)

module.exports = Item