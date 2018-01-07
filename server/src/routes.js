/**
 * Created by Martynas on 2017-11-25.
 */
const UsersControllers = require('./resources/users/UsersControllers.js')
const UsersPolicies = require('./resources/users/UsersPolicies.js')
const StampsPolicies = require('./resources/stamps/StampsPolicies.js')
const StampsControllers = require('./resources/stamps/StampsControllers.js')
const CountriesControllers = require('./resources/countries/CountriesControllers.js')
const GradesControllers = require('./resources/grades/GradesControllers.js')
const TopicsControllers = require('./resources/topics/TopicsControllers.js')
const AlbumsControllers = require('./resources/albums/AlbumsControllers.js')
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
    CountriesControllers.get)
  app.get(ss.path.grades,
    GradesControllers.get)
  app.get(ss.path.albums,
    AlbumsControllers.get)
  app.get(ss.path.topics,
    TopicsControllers.get)
  app.get(ss.path.stamps,
    StampsControllers.getStamps)
  app.get(ss.path.stamps + ss.path.stampId,
    StampsControllers.getStampsStampId)
  app.get(ss.path.users + ss.path.username + ss.path.stamps,
    StampsControllers.getUsersUsernameStamps)
  app.get(ss.path.users,
    UsersControllers.getUsers)
  app.post(ss.path.register,
    UsersPolicies.register,
    UsersControllers.register)
  app.post(ss.path.stamps,
    StampsPolicies.postOrPut,
    StampsControllers.post)
  app.put(ss.path.stamps + ss.path.stampId,
    StampsPolicies.postOrPut,
    StampsControllers.put)
  app.delete(ss.path.stamps + ss.path.stampId,
    StampsControllers.deleteStampsStampId)
  // app.post(ss.path.stamps, (req, res) => {
  //   res.send({
  //     message: 'Hello world -Martynassss'
  //   })
  // })
}
