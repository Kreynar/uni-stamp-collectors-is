/**
 * Created by Martynas on 2018-01-07.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function get (req, res) {
  try {
    let username = null
    if (req.params.username) {
      username = req.params.username
    }
    const statistics = await db.getStatistics(username, req.query)
    tracer.log(statistics)
    res.send(statistics)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in getting statistics.'
    })
  }
  finally {
  }
}

module.exports = {
  get
}
