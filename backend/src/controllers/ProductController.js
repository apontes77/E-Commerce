const express = require('express')
const multer = require('multer')
const multerConfig = require('../config/multer')
const Product = require('../models/Products')

const router = express.Router()

router.post('/registerProduct', multer(multerConfig).single('file'), async (req, res) => {
    const { name, valueUnit, description, amount } = req.body
    const { key,  location } = req.file

    console.log(name)
  
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

module.exports = app => app.use('/registers', router)