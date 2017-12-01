/**
 * Created by Martynas on 2017-11-24.
 */

/* Variables object. */
const vv = {}

vv.mainColorOfTheme = 'orange'

vv.navigationDrawer = {}
vv.navigationDrawer.myStamps = 'myStamps'
vv.navigationDrawer.newStamp = 'newStamp'
vv.navigationDrawer.allStamps = 'allStamps'
vv.navigationDrawer.allCollectors = 'allCollectors'

vv.baseURL = `http://localhost:8081/`
vv.path = {}
vv.path.register = '/register'
vv.path.stamps = '/stamps'
vv.path.users = '/users'
vv.path.albums = '/albums'
vv.path.new = '/new'
vv.path.edit = '/edit'
vv.path.id = '/:id'
vv.path.name = '/:name'

module.exports = vv
