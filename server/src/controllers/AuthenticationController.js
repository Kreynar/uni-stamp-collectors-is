/**
 * Created by Martynas on 2017-11-25.
 */

const db = require('../db/functionsForDb.js')

module.exports = {
  async register (req, res) {
    try {
      const response = db.postUsers(req.body)
      console.log('Inserted row into user_:', response)
      res.send({
        message: `user registered? (email: ${req.body.email}) -Martynas`
      })
    }
    catch (error) {
      res.status(400).send({
        errorString: 'This email acc is already in use OR smth else went wrong lolol'
      })
    }
    finally {
    }
  }
}
