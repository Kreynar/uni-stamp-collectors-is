/**
 * Created by Martynas on 2017-12-10.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function get (req, res) {
  try {
    const arrayOfTopicsIdsAndNames = await db.getArrayOfTopicsIdsAndNames()
    tracer.log(arrayOfTopicsIdsAndNames)
    res.send(arrayOfTopicsIdsAndNames)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in getting topics list.'
    })
  }
  finally {
  }
}

module.exports = {
  get
}
