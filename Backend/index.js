import express from 'express'
import dotenv from 'dotenv'


const port = process.env.port || 3001

const app = express();

app.get('/', (req,res) => {
    res.send('Hello world')
})


app.listen(port, () => {
    console.log(`Listening at ${port}`)
})