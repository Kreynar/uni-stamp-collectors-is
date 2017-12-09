/**
 * Created by Martynas on 2017-11-27.
 */

const Joi = require('joi')

const userSchema = {
  username: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().email().max(100).required(),
  password: Joi.string().alphanum().min(6).max(32).required(),
  firstName: Joi.string().allow('').max(100),
  lastName: Joi.string().allow('').max(100)
}

function getPostErrorMessage (errorInValidationResult) {
  let errorMessage
  switch (errorInValidationResult.details[0].context.key) {
    case 'username':
      errorMessage = 'Username must be between 3 and 20 characters length.'
      break
    case 'email':
      errorMessage = 'You must provide a valid email.'
      break
    case 'password':
      errorMessage = 'Password must be between 6 and 32 characters length and contain only letters and/or numbers.'
      break
    case 'firstName':
      errorMessage = 'Name can not be longer than 100 characters length.'
      break
    case 'lastName':
      errorMessage = 'Last name can not be longer than 100 characters length.'
      break
    default:
      errorMessage = 'Invalid registration information.'
  }
  return errorMessage
}

module.exports = {
  register (req, res, next) {
    const validationResult = Joi.validate(req.body, userSchema)
    if (validationResult.error) {
      const errorMessage = getPostErrorMessage(validationResult.error)
      res.status(400).send({
        errorMessage
      })
    }
    else {
      // If validation passed:
      next()
    }
  }
}
