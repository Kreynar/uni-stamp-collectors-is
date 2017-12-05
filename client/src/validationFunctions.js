/**
 * Created by Martynas on 2017-12-03.
 */

const validationFunctions = {}

validationFunctions.validateRequired = (value) => {
  return !!(value.trim()) || 'Required.'
}

validationFunctions.validateStampPublishYear = (value) => {
  let isValueValid = false
  const errorMessage = `Must be a year between 1840 and ${new Date().getFullYear()}`
  let parsedInt
  try {
    // eslint-disable-next-line no-useless-escape
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
      parsedInt = Number(value)
      if ((parsedInt >= 1840) && (parsedInt <= new Date().getFullYear())) {
        isValueValid = true
      }
    }
    return isValueValid || errorMessage
    // const parsedInt = (parseInt(value, 10))
    // return parsedInt.toString()
    // console.log('parsedInt: ', parsedInt)
    // return (errorMessage || ((parsedInt >= 1840) && (parsedInt <= new Date().getFullYear())))
  }
  catch (error) {
    return errorMessage
  }
}

validationFunctions.validateStringLength = (value, minLength, maxLength) => {
  return (value.length >= minLength && value.length <= maxLength) || `Must contain between ${minLength} and ${minLength} number of characters`
}

validationFunctions.validateEmail = (value) => {
  // eslint-disable-next-line no-useless-escape
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || 'Invalid e-mail.'
}

module.exports = validationFunctions
