import express from 'express'

import port from './.env'

const app = express();

app.get('/', (req,res) => {
    res.send('Hello world')
})


app.listen(port, () => {
    console.log(`Listening at ${port}`)
})