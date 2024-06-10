import express from 'express'

const app = express()

const route = express.Router()

route.get('/teste', (req, res) => {
    return res.status(200).json({ teste: 'Funciona' })
})

app.use('/api', route)

app.listen(process.env.PORT, () => console.log('running'))