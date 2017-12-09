/**
 * Created by Martynas on 2017-11-25.
 */
const UsersControllers = require('./resources/users/UsersControllers.js')
const UsersPolicies = require('./resources/users/UsersPolicies.js')
const StampsPolicies = require('./resources/stamps/StampsPolicies.js')
const StampsControllers = require('./resources/stamps/StampsControllers.js')
const ss = require('./variables.js')

module.exports = (app) => {
  // app.get('/status', (req, res) => {
  //   res.send({
  //     message: 'Hello world -Martynas'
  //   })
  // })
  // app.get(ss.path.status, (req, res) => {
  //   res.send({
  //     message: 'Hello world -Martynas'
  //   })
  // })
  // app.post(ss.path.register, (req, res) => {
  //   res.send({
  //     message: 'Hello world -Martynas'
  //   })
  // })
  app.get(ss.path.countries,
    StampsControllers.register)
  app.post(ss.path.register,
    UsersPolicies.register,
    UsersControllers.register)
  app.post(ss.path.stamps,
    StampsPolicies.post,
    StampsControllers.post)
  // app.post(ss.path.stamps, (req, res) => {
  //   res.send({
  //     message: 'Hello world -Martynassss'
  //   })
  // })
}
