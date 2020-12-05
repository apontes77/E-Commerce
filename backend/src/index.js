const server = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const ProductController = require('./controllers/ProductController')
const ItensController = require('./controllers/ItemController')
const OrdersController = require('./controllers/OrderController')

const app = server()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

ProductController(app)
ItensController(app)
OrdersController(app)

app.listen(8080, () => {
    console.log('Server on')
})