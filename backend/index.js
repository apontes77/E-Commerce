const server = require('express')

const app = server()

app.listen(8080, () => {
    console.log('Server on')
})