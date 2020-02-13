const db = require('../config')

module.exports = {
  getBurgers() {
    let result = []
    db.query('SELECT * FROM burgers', (e, burgers) => {
      if(e) {
        console.log(e)
      }
      result = burger
    })
    return result
  },
  addBurger() {

  },
  eatBurger() {

  },
  removePizza() {

  }
}   
