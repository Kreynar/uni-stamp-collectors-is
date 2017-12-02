/**
 * Created by Martynas on 2017-12-03.
 */

const validationFunctions = {}

validationFunctions.validateRequired = (value) => {
  return !!(value.trim()) || 'Required.'
}

validationFunctions.validateEmail = (value) => {
  // eslint-disable-next-line no-useless-escape
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || 'Invalid e-mail.'
}

module.exports = validationFunctions
