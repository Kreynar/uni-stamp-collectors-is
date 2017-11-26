/**
 * Created by Martynas on 2017-11-24.
 */
import axios from 'axios'
import vv from '../variables.js'

export default () => {
  return axios.create({
    baseURL: vv.baseURL
  })
}
