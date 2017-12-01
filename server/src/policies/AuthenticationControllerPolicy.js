/**
 * Created by Martynas on 2017-11-27.
 */

const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      username: Joi.string().alphanum().min(3).max(20).required(),
      email: Joi.string().email().max(100).required(),
      password: Joi.string().alphanum().min(6).max(32).required(),
      firstName: Joi.string().allow('').max(100),
      lastName: Joi.string().allow('').max(100)
    }
    const result = Joi.validate(req.body, schema)
    if (result.error) {
      switch (result.error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            message: 'Username must be between 3 and 20 characters length.'
          })
          break
        case 'email':
          res.status(400).send({
            message: 'You must provide a valid email.'
          })
          break
        case 'password':
          res.status(400).send({
            message: 'Password must be between 6 and 32 characters length and contain only letters and/or numbers.'
          })
          break
        case 'firstName':
          res.status(400).send({
            message: 'Name can not be longer than 100 characters length.'
          })
          break
        case 'lastName':
          res.status(400).send({
            message: 'Last name can not be longer than 100 characters length.'
          })
          break
        default:
          res.status(400).send({
            message: 'Invalid registration information.'
          })
      }
    }
    else {
      // If validation passed:
      next()
    }
  }
}
