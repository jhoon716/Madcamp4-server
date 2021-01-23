const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')

const hostname = '0.0.0.0'
const port = 1234

// Body parser
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.use(cookieParser())

// Connect to DB
const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    // Connected to Mongodb server
    console.log("Connected to mongod server")
})
mongoose.connect('mongodb://localhost/love_signal')

// Set rendering engine
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'))

app.use(session({
    key: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60000
    }
}))

// Routers
const userRouter = require('./routes/user')
app.use('/user', userRouter)

// Start server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
