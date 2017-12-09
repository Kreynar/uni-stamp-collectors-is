/**
 * Created by Martynas on 2017-12-06.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function post (req, res) {
  try {
    const insertedStamp = await db.postStamps(req.body)
    tracer.log(insertedStamp)
    // tracer.log(response)
    // tracer.log(response.rows)
    // tracer.log('Inserted row into user_:', response)
    res.send(insertedStamp)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      message: 'Some error in insterting stamp.'
    })
  }
  finally {
  }
}

module.exports = {
  post
}
