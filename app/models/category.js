const mongoose = require('mongoose')

const Schema = mongoose.Schema
const categorySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

const Category = mongoose.model('Category', categorySchema)
// const category = new Category()


module.exports = {
    Category
}