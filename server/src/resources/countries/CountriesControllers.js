/**
 * Created by Martynas on 2017-12-09.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function get (req, res) {
  try {
    const arrayOfCountries = await db.getArrayOfCountriesIdsAndNames()
    tracer.log(arrayOfCountries)
    res.send(arrayOfCountries)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in getting countries list.'
    })
  }
  finally {
  }
}

module.exports = {
  get
}
