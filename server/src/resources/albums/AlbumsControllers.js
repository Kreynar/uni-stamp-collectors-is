/**
 * Created by Martynas on 2018-01-06.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function get (req, res) {
  try {
    const arrayOfAlbumsIdsAndNames = await db.getArrayOfAlbumsIdsAndNames()
    tracer.log(arrayOfAlbumsIdsAndNames)
    res.send(arrayOfAlbumsIdsAndNames)
    // const arrayOfCountries = await db.getArrayOfCountriesIdsAndNames(req.body)
    // tracer.log(arrayOfCountries)
    // res.send(arrayOfCountries.rows)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in getting albums list.'
    })
  }
  finally {
  }
}

module.exports = {
  get
}
