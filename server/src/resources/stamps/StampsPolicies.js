/**
 * Created by Martynas on 2017-12-06.
 */

const ss = require('../../variables.js')
const tracer = require('tracer').console(ss.tracerOutputCustomization)
const Joi = require('joi')

const stampSchema = {
  numberScott: Joi.string().allow('', null),
  numberMichel: Joi.string().allow('', null),
  numberStanleyGibbons: Joi.string().allow('', null),
  numberYvertEtTellier: Joi.string().allow('', null),
  year: Joi.number().integer().min(1840).max(new Date().getFullYear()),
  country: Joi.number().integer(),
  nominalValue: Joi.string(),
  grade: Joi.number().integer(),
  isCancelled: Joi.boolean().allow(null),
  topics: Joi.array().items(Joi.string()),
  category: Joi.string().allow('', null),
  structureType: Joi.string().allow('', null),
  structureNumber: Joi.string().allow('', null),
  structureStampCount: Joi.number().integer().allow(null)
  //
  // username: Joi.string().alphanum().min(3).max(20).required(),
  // email: Joi.string().email().max(100).required(),
  // password: Joi.string().alphanum().min(6).max(32).required(),
  // firstName: Joi.string().allow('').max(100),
  // lastName: Joi.string().allow('').max(100)
}

function getPostErrorMessage (errorInValidationResult) {
  let errorMessage
  switch (errorInValidationResult.details[0].context.key) {
    case 'year':
      errorMessage = 'Invalid year.'
      break
    default:
      errorMessage = 'Invalid information.'
  }
  return errorMessage
}

module.exports = {
  post (req, res, next) {
    tracer.log()
    const validationResult = Joi.validate(req.body, stampSchema)
    tracer.log(validationResult)
    if (validationResult.error) {
      tracer.log()
      const errorMessage = getPostErrorMessage(validationResult.error)
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
