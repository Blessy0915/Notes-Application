const mongoose = require('mongoose')
const configureDB = () => {
    //DATABASE configuration
mongoose.connect('mongodb://localhost:27017/aug-notes-app',{useNewUrlParser : true, useUnifiedTopology: true})
.then(()=>
{
    console.log('connected to the database')
})
.catch((err)=>
{
    console.log(err)
})
}

module.exports = configureDB