const express = require('express')
const multer = require('multer')
const multerConfig = require('../config/multer')
const Item = require('../models/Item')

const router = express.Router()

router.post('/registerItem', async (req, res) => {
    const { discount, amount, price } = req.body

    try {
        const item = await Item.create({
            discount,
            amount,
            price
        })

        return res.send({ item })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

router.get('/getAllItens', async (req, res) => {

    Item.find({}, (err, itens) => {

        if(err)
            res.json(err)
        else
            res.json(itens)
    })    
})

router.get('/getItem', async (req, res) => {
    
    const { _id } = req.body
        
    Item.findOne({ _id }, (err, item) => {

        if(err)
            res.json(err)
        else
            res.json(item)
    }) 
})

router.post('/updateItem', async (req, res) => {
    const { discount, amount, price } = req.body
      
    try {
        const item = await Item.update({
            discount,
            amount,
            price
        })

        return res.send({ item })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

router.post('/deleteItem', async (req, res) => {
    const { _id } = req.body
      
    try {
        const item = await Item.deleteOne({ _id })

        return res.send({ item })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('/registersItens', router)