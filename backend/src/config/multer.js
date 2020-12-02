const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require('path')
const crypto = require('crypto')
const aws = require('aws-sdk')

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err)

                file.key = `${hash.toString('hex')}-${file.originalname}`
                
                cb(null, file.key)
            })
        }
    }),

    s3: multerS3({
        s3: new aws.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
        }),
        bucket: 'ecommersefiles',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err)

                const filaname = `${hash.toString('hex')}-${file.originalname}`
                
                cb(null, filaname)
            })
        }
    })
}

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    
    storage: storageTypes.s3, 

    limits: {
        fileSize: 5 * 1024 * 1024 
    },
    fileFilter: (req, file, cb) => {
        
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/jpg'
        ]

        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        }else {
            cb(new Error("Invalid Type"))
        }
    }
}