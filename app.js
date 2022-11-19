const express = require('express')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const hotelsRoute = require('./routes/hotels')
const roomsRoute = require('./routes/rooms')

const server = () => {
    const app = express();

    // Middleware
    app.set('view engine', 'ejs')
    app.use(express.json())
    app.use(cookieParser())

    // Routes
    app.use('/api/auth', authRoute)
    app.use('/api/users', usersRoute)
    app.use('/api/hotels', hotelsRoute)
    app.use('/api/rooms', roomsRoute)


    // Error handler
    app.use((err, req, res, next) => {
        const ERROR_STATUS = err.status || 500;
        const ERROR_MESSAGE = err.message || 'Something went wrong';
        return res.status(ERROR_STATUS).json({
            success: false,
            status: ERROR_STATUS,
            message: ERROR_MESSAGE,
            stack: err.stack
        })
    })


    return app;
}

module.exports = server