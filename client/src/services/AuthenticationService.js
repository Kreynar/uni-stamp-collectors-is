/**
 * Created by Martynas on 2017-11-24.
 */

import axiosInstance from './AxiosInstance.js'
import ss from '../strings.js'

export default {
  register (credentials) {
    return axiosInstance().post(ss.path.register, credentials)
  }
}
