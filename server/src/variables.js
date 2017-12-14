/**
 * Created by Martynas on 2017-11-27.
 */

const vv = {}

vv.tracerOutputCustomization = {
  format: '@@@@@ Tracer ({{file}}: {{line}}) ({{timestamp}} <{{title}}>): \n{{message}}',
  dateformat: 'HH:MM:ss.L'
}

vv.path = {}
vv.path.register = '/register'
vv.path.stamps = '/stamps'
vv.path.users = '/users'
vv.path.albums = '/albums'
vv.path.new = '/new'
vv.path.edit = '/edit'
vv.path.id = '/:id'
vv.path.name = '/:name'
vv.path.status = '/status'
vv.path.countries = '/countries'
vv.path.grades = '/grades'
vv.path.topics = '/topics'

// vv.testAlbumId = 1
vv.testTemporaryUserId = 1

vv.errors = {
  postStamps: 'Error in insterting new stamp'
}

module.exports = vv
