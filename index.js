require('dotenv').config();
const server = require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;

const app = server();

app.listen(PORT, () => {
    console.log('server live on PORT = ' + process.env.PORT);
    mongoose.connect(process.env.DB_URI, () => console.log('Connection to DB established!'), (err) => console.log(err))
})