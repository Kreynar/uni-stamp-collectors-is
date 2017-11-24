/**
 * Created by Martynas on 2017-11-24.
 */
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
