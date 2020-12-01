const mongoose = require('../database')

const OrderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
})

const Order =  mongoose.model('Order', OrderSchema)

module.exports = Order