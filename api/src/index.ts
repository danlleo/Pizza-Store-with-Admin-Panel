require('dotenv').config()
import express from 'express'
import fileUpload from 'express-fileupload'
import path from 'path'
import mongoose from 'mongoose'
import foodsRoute from './routes/foods'

const app = express()
const PORT = process.env.PORT || 27017
const DATABASE_URL: string = process.env.DATABASE_URL || 'mongodb://localhost/pizza-store'
const db = mongoose.connection

mongoose.connect(DATABASE_URL)

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(fileUpload({
    limits: { fileSize: 1048576 } // 1048576 bytes = 1 megabyte
}))

app.use('/foods', foodsRoute)

app.listen(PORT, () => {
    console.log('Server Running On Port ' + PORT)
})