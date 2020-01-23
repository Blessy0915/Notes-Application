const express = require('express') // npm install --save express
const app = express() 
const port = 3025
const configureDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')


app.use(cors())
app.use(express.json())
configureDB()



// Route Handlers || Request Handlers 
app.get('/', (req, res) => {
    res.send('welcome to the notes app')
})

app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})


