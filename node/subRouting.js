import express from 'express'

export const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ message: 'Hello from API' })
})

app.use('/api', router)

export const start = () => {
  app.listen(3000, () => {
    console.log('Server listening on port: 3000')
  })
}
