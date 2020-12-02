const express = require('express')
const Order = require('../models/Order')

const router = express.Router()

router.post('/registerOrder', async (req, res) => {
    const { date } = req.body

    try {
        const order = await Order.create({ date })

        return res.send({ order })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

router.get('/getAllOrders', async (req, res) => {

    Order.find({}, (err, orders) => {

        if(err)
            res.json(err)
        else
            res.json(orders)
    })    
})

router.get('/getOrder', async (req, res) => {
    
    const { _id } = req.body
        
    Order.findOne({ _id }, (err, order) => {

        if(err)
            res.json(err)
        else
            res.json(order)
    }) 
})

router.post('/updateOrder', async (req, res) => {
    const { _id, date } = req.body
  
    try {
        const order = await Order.updateOne({ _id, date })

        return res.send({ order })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

router.post('/deleteOrder', async (req, res) => {
    const { _id } = req.body
      
    try {
        const Order = await Order.deleteOne({ _id })

        return res.send({ Order })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('/registersOrders', router)