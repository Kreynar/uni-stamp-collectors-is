/**
 * Created by Martynas on 2017-12-06.
 */

const ss = require('../../variables.js')
const tracer = require('tracer').console(ss.tracerOutputCustomization)
const Joi = require('joi')

const stampSchema = {
  // id: Joi.number().integer().allow(null),
  temporaryPictureUrl: Joi.string(),
  album: Joi.number().integer(),
  numberScott: Joi.string().allow('', null),
  numberMichel: Joi.string().allow('', null),
  numberStanleyGibbons: Joi.string().allow('', null),
  numberYvertEtTellier: Joi.string().allow('', null),
  year: Joi.number().integer().min(1840).max(new Date().getFullYear()),
  country: Joi.number().integer(),
  nominalValue: Joi.string(),
  grade: Joi.number().integer(),
  isCancelled: Joi.boolean().allow(null),
  arrayOfTopics: Joi.array().items(Joi.string()),
  category: Joi.string().allow('', null),
  structureType: Joi.string().allow('', null),
  structureNumber: Joi.string().allow('', null),
  structureStampCount: Joi.number().integer().allow(null),
  isExhibited: Joi.boolean().allow(null),
  specimenCount: Joi.number().integer().allow(null),
  isOnSale: Joi.boolean().allow(null),
  marketValue: Joi.number().positive().allow(0, null),
  faceDescription: Joi.string().max(300).allow('', null),
  comment: Joi.string().max(1000).allow('', null),
  arrayOfCustomAttributes: Joi.array().items(Joi.object())
  //
  // username: Joi.string().alphanum().min(3).max(20).required(),
  // email: Joi.string().email().max(100).required(),
  // password: Joi.string().alphanum().min(6).max(32).required(),
  // firstName: Joi.string().allow('').max(100),
  // lastName: Joi.string().allow('').max(100)
}

function getValidationErrorMessage (errorInValidationResult) {
  let errorMessage
  switch (errorInValidationResult.details[0].context.key) {
    // case 'year':
    //   errorMessage = 'Invalid year.'
    //   break
    default:
      errorMessage = 'Invalid stamp attributes.'
  }
  return errorMessage
}

module.exports = {
  postOrPut (req, res, next) {
    tracer.log(req.body)
    const validationResult = Joi.validate(req.body, stampSchema)
    tracer.log(validationResult)
    if (validationResult.error) {
      tracer.log()
      const errorMessage = getValidationErrorMessage(validationResult.error)
      tracer.log(errorMessage)
      res.status(400).send({
        errorMessage
      })
      tracer.log()
    }
    else {
      tracer.log()
      // If validation passed:
      next()
    }
  }
}
