const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    src: String,
    dst: String,
    content: String,
    time: Date
})

module.exports = mongoose.model('message', messageSchema)