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
    res.send(insertedStamp)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in insterting stamp.'
    })
  }
  finally {
  }
}

/*
 * When user opens a form for adding new stamp or editing existing stamp, this function
 * provides all needed data for generating a form in front-end app. For example, this
 * function gives client the list of all possible countries, etc.
 */
// async function getNewOrEdit (req, res) {
//   try {
//     const arrayOfCountries = await db.getCountries(req.body)
//     // const insertedStamp = await db.postStamps(req.body)
//     // tracer.log(insertedStamp)
//     // res.send(insertedStamp)
//   }
//   catch (error) {
//     // tracer.log(error)
//     // res.status(400).send({
//     //   message: 'Some error in insterting stamp.'
//     // })
//   }
//   finally {
//   }
// }

module.exports = {
  post
}
