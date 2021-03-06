const express = require('express')
const multer = require('multer')
const multerConfig = require('../config/multer')
const Product = require('../models/Products')

const router = express.Router()

router.post('/registerProduct', multer(multerConfig).single('file'), async (req, res) => {
    const { name, price, description, countInStock, brand } = JSON.parse(req.body.document)
    const { originalname: file_name,  location: file_url = "" } = req.file

    try {
        const product = await Product.create({
            name,
            price,
            description,
            countInStock,
            brand,
            file_name,
            file_url,
        })
        return res.status(201).send({ product });
    }catch(err) {
        console.log(err)
        return res.status(400).send({ error: err })
    }
})

router.put('/updateProduct', multer(multerConfig).single('file'), async (req, res) => {
    const { _id, name, price, description, countInStock, brand } = JSON.parse(req.body.document)
    const { originalname: file_name,  location: file_url = "" } = req.file
    
    try {
        const product = await Product.updateOne({ _id },{
            name: name,
            price,
            description,
            countInStock,
            brand,
            file_name,
            file_url,
        })

        return res.status(200).send({ product })
    }catch(err) {
        console.log(err);
        return res.status(400).send({ error: err })
    }
})

router.delete('/deleteProduct/:_id', async (req, res) => {
    const { _id } = req.params

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

router.get('/getProduct/:_id', async (req, res) => {

    const { _id } = req.params
    

    Product.findOne({ _id }, (err, item) => {

        if(err)
            res.json(err)
        else
            res.json(item)
    }) 
})

module.exports = app => app.use('/registers', router)