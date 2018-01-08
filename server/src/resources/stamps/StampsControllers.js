/**
 * Created by Martynas on 2017-12-06.
 */

const vv = require('../../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const db = require('../../db/functionsForDb.js')

async function getStampsOrUsersUsernameStamps (req, res) {
  try {
    // const stamps = await db.getStamps()
    let username = null
    if (req.params.username) {
      username = req.params.username
    }
    const arrayOfStamps = await db.getStampsOrUsersUsernameStamps(username, req.query)
    const statistics = (await db.getStatistics(username, req.query))[0]
    const response = {
      arrayOfStamps,
      statistics
    }
    tracer.log(response)
    res.send(response)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in retrieving stamps.'
    })
  }
  finally {
  }
}

// async function getUsersUsernameStamps (req, res) {
//   try {
//     tracer.log(req.query)
//     // const stamps = await db.getUsersUsernameStamps(req.params.username, req.query)
//     const stamps = await db.getStampsOrUsersUsernameStamps(req.params.username, req.query)
//     tracer.log(stamps)
//     res.send(stamps)
//   }
//   catch (error) {
//     tracer.log(error)
//     res.status(400).send({
//       errorMessage: 'Some error in retrieving stamps.'
//     })
//   }
//   finally {
//   }
// }

async function getStampsStampId (req, res) {
  try {
    const stamp = await db.getStampsStampId(req.params.stampId)
    tracer.log(stamp)
    res.send(stamp)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in retrieving stamp.'
    })
  }
  finally {
  }
}

async function post (req, res) {
  try {
    const insertedStampId = await db.postStamps(req.body)
    tracer.log(insertedStampId)
    res.send(insertedStampId)
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

async function put (req, res) {
  try {
    const updatedStampId = await db.putStampsStampId(req.params.stampId, req.body)
    tracer.log(updatedStampId)
    res.send(updatedStampId)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in updating stamp.'
    })
  }
  finally {
  }
}

async function deleteStampsStampId (req, res) {
  try {
    const deletedStampId = await db.deleteStampsStampId(req.params.stampId)
    tracer.log(deletedStampId)
    res.send(deletedStampId)
  }
  catch (error) {
    tracer.log(error)
    res.status(400).send({
      errorMessage: 'Some error in deleting stamp.'
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
  // getStamps,
  getStampsOrUsersUsernameStamps,
  getStampsStampId,
  // getUsersUsernameStamps,
  post,
  put,
  deleteStampsStampId
}
