/**
 * Created by Martynas on 2017-11-25.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function register (req, res) {
  try {
    const response = await db.postUsers(req.body)
    // tracer.log(response)
    // tracer.log(response.rows)
    const insertedUser = response.rows[0]
    // tracer.log('Inserted row into user_:', response)
    res.send(insertedUser)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Email or username already in use.'
    })
  }
  finally {
  }
}

async function getUsers (req, res) {
  try {
    const users = await db.getUsers()
    tracer.log(users)
    res.send(users)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in retrieving users.'
    })
  }
  finally {
  }
}

module.exports = {
  register,
  getUsers
}
