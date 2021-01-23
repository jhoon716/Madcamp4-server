const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    id: {type: String, unique: true},
    passwd: String,
    salt: String,
    profile: String
})

module.exports = mongoose.model('user', userSchema)