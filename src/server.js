const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const post_routes = require('./routes/post_routes')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})

const db = mongoose.connection
db.on('error',(error)=>{
    console.error(error)
})
db.once('open',()=>{
    console.log('connected to DB')
})

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded( { extended:true , limit:'1mb' } ))
app.use(bodyparser.json())


app.use('/post',post_routes)




module.exports = app