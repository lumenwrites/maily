import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import cookieSession from 'cookie-session'
import passport from 'passport'

/* Import Routes */
import usersRoutes from './routes/users.routes.js'

/* Import config */
import keys from './config/keys'

/* Setup app */
const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

/* Tell express to use cookies */
/* Cookie will last for 30 days(in milliseconds), and be encrypted with random key. */
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}))
/* Cookie extracts browser cookies and puts them into req.session
   (stored before, by passport with Set-cookie header, when user auth'd)*/
/* passport extracts id from cookie data, deserializes it, and returns me a user.*/
/* And as a result, I have req.user.*/
app.use(passport.initialize())
/* Passport takes info from req.session and uses it to deserialize a user */
app.use(passport.session())

/* Connect to DB */
mongoose.Promise = global.Promise;
var MONGO_DB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/maily';
console.log("Connecting to the db at " + MONGO_DB_URL);
mongoose.connect(MONGO_DB_URL, (error) => {
    if (error) {
	console.error('Please make sure Mongodb is installed and running!'); 
	throw error;
    }
});


/* Auth routes */
app.use('/auth', usersRoutes)
app.use('/', usersRoutes)


/* Serve static files */
app.use('/static', express.static(path.resolve(__dirname, './static')))


// Routes
app.get('/', (req, res) => {
    /* res.render('index', {html: 'Hello'})*/
    console.log(req)
    res.send('Hi there!')
})

/* Serve */
const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log(`Running on port ${port}!`)
})

