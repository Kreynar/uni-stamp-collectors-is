/**
 * Created by Martynas on 2017-11-25.
 */

const vv = require('../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../db/functionsForDb.js')

module.exports = {
  async register (req, res) {
    try {
      const response = await db.postUsers(req.body)
      tracer.log(response)
      tracer.log(response.rows)
      const insertedUser = response.rows[0]
      tracer.log('Inserted row into user_:', response)
      res.send(insertedUser)
    }
    catch (error) {
      tracer.log(error)
      res.status(400).send({
        message: 'Email or username already in use.'
      })
    }
    finally {
    }
  }
}
