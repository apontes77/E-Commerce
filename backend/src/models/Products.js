const s3Storage = require('multer-s3')
const mongoose = require('../database')
const fs = require('fs')
const path = require('path')
const aws = require('aws-sdk')

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
        required: true,
        createdAt: {
          type: Date,
          default: Date.now
        }
    },
    file_url: {
        type: String,
        required: true,
        createdAt: {
          type: Date,
          default: Date.now
        }
    }
})

ProductSchema.pre("save", function(){
    if(!this.file_url) {
        this.url = `${process.env.APP_URL}/files/${this.file_name}`
    }
})

ProductSchema.pre("remove", function() {
    if (process.env.STORAGE_TYPE === "s3") {
      return s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: this.key
        })
        .promise()
        .then(response => {
          console.log(response.status);
        })
        .catch(response => {
          console.log(response.status);
        });
    } else {
      return promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
      );
    }
  });

const Product =  mongoose.model('Product', ProductSchema)

module.exports = Product