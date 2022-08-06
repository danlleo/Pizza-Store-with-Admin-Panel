require('dotenv').config()
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log("Server Running On Port " + PORT)
})