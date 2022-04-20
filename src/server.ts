import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import post_routes from './routes/post_routes'
import mongoose from 'mongoose'
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error',(error)=>{
    console.error(error)
})
db.once('open',()=>{
    console.log('connected to DB')
})

import bodyparser from 'body-parser'
app.use(bodyparser.urlencoded( { extended:true , limit:'1mb' } ))
app.use(bodyparser.json())


app.use('/post',post_routes)




export = app