const express = require('express')
const multer = require('multer')
const multerConfig = require('../config/multer')
const Product = require('../models/Products')

const router = express.Router()

router.post('/registerProduct', multer(multerConfig).single('file'), async (req, res) => {
    const { name, valueUnit, description, amount } = req.body
    const { key,  location } = req.file

    try {
        const product = await Product.create({
            name: name,
            valueUnit,
            description,
            amount,
            file_name: key,
            file_url: location,
        })

        return res.send({ product })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

router.post('/updateProduct', multer(multerConfig).single('file'), async (req, res) => {
    const { _id, name, valueUnit, description, amount } = req.body
  
    try {
        const product = await Product.update({
            _id,
            name: name,
            valueUnit,
            description,
            amount,
            file_name: key,
            file_url: location,
        })

        return res.send({ product })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

router.post('/deleteProduct', async (req, res) => {
    const { _id } = req.body

    try {
        const product = await Product.deleteOne({ _id })

        return res.send({ messege: "deleted sucessfull" })
    }catch(err) {
        return res.status(400).send({ error: err })
    }
})

router.get('/getAllProducts', async (req, res) => {

    Product.find({}, (err, itens) => {

        if(err)
            res.json(err)
        else
            res.json(itens)
    })    
})

router.get('/getProduct', async (req, res) => {
    
    const { _id } = req.body
        
    Product.findOne({ _id }, (err, item) => {

        if(err)
            res.json(err)
        else
            res.json(item)
    }) 
})

module.exports = app => app.use('/registers', router)