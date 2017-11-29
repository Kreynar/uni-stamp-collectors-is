/**
 * Created by Martynas on 2017-11-25.
 */
const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')

module.exports = (app) => {
  // app.get('/status', (req, res) => {
  //   res.send({
  //     message: 'Hello world -Martynas'
  //   })
  // })
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
