import express from 'express'
import path from 'path'

const app = express()

/* var config = require('./config.json');*/

/* app.set('view engine', 'ejs')*/

/* Serve static files */
/* app.use('/static', express.static(path.resolve(__dirname, './static')))*/

// Routes
app.get('/', (req, res) => {
    /* res.render('index', {html: 'Hello'})*/
    console.log(req)    
    res.send('Hi there!')
})

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log(`Running on port ${port}!`)
})

