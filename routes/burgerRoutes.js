const {burgers} = require('../controllers')
module.exports = app => {
  // GET all Burgers
  app.get('/burgers', (req, res) => {
    res.send('GET all burgers')
  })
  // POST one burger
  app.post('/burgers', (req, res) => {
    res.send('POST one burger')
  })
  // PUT one burger
  app.put('/burgers/:id', (req, res) => {
    res.send('PUT one burger')
  })
  // DELETE one burger
  app.delete('/burgers/:id', (req, res) => {
    res.send('DELETE on burger')
  })
}