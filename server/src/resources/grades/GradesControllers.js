/**
 * Created by Martynas on 2017-12-10.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function get (req, res) {
  try {
    const arrayOfGradesIdsAndNames = await db.getArrayOfGradesIdsAndNames(req.body)
    tracer.log(arrayOfGradesIdsAndNames)
    res.send(arrayOfGradesIdsAndNames)
    // const arrayOfCountries = await db.getArrayOfCountriesIdsAndNames(req.body)
    // tracer.log(arrayOfCountries)
    // res.send(arrayOfCountries.rows)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in getting grades list.'
    })
  }
  finally {
  }
}

module.exports = {
  get
}
