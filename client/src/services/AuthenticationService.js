/**
 * Created by Martynas on 2017-11-24.
 */

import Api from './Api.js'
import vv from '../variables.js'

export default {
  register (credentials) {
    return Api().post(vv.path.register, credentials)
  }
}
