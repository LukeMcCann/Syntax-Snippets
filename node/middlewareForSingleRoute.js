const log = (req, res, next) => {
  console.log('logging')
  next()
}

app.get('/', log, (req, res) => {
  res.send('Hello World')
})
