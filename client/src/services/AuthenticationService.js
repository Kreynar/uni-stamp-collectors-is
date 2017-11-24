/**
 * Created by Martynas on 2017-11-24.
 */

import Api from '@/services/Api'
import vv from '../variables.js'

export default {
  register (credentials) {
    return Api().post(vv.path.register, credentials)
  }
}
