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
      firstName: Joi.string().alphanum().max(100),
      lastName: Joi.string().alphanum().max(100)
    }
    const result = Joi.validate(req.body, schema)
    if (result.error) {
      switch (result.error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'Username must be between 3 and 20 characters length.'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be between 6 and 32 characters length.'
          })
          break
        case 'firstName':
          res.status(400).send({
            error: 'Name can not be longer than 100 characters length.'
          })
          break
        case 'lastName':
          res.status(400).send({
            error: 'Last name can not be longer than 100 characters length.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          })
      }
    }
    else {
      // If validation passed:
      next()
    }
  }
}
