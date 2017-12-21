/**
 * Created by Martynas on 2017-12-03.
 */

const validationFunctions = {}

validationFunctions.validateRequired = (value) => {
  // return !!(value.trim()) || 'Required.'
  return !!value || 'Required.'
}

validationFunctions.validateCurrency = (value) => {
  // var value= $("#field1").val();
  const errorMessage = 'Must be correct amount of money (e.g. 1, 0.59, 148.3)'
  const regex = /^[0-9]\d*(()?(\.\d{0,2})?)$/
  // var regex = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
  if ((value === null) || (regex.test(value))) {
    return true
  }
  else {
    return errorMessage
  }
  // if (regex.test(value)) {
  //   // Input is valid, check the number of decimal places
  //   const twoDecimalPlaces = /\.\d{2}$/g
  //   const oneDecimalPlace = /\.\d{1}$/g
  //   const noDecimalPlacesWithDecimal = /\.\d{0}$/g
  //   if (value.match(twoDecimalPlaces)) {
  //     // all good, return as is
  //     return value
  //   }
  //   if (value.match(noDecimalPlacesWithDecimal)) {
  //     // add two decimal places
  //     return value + '00'
  //   }
  //   if (value.match(oneDecimalPlace)) {
  //     // ad one decimal place
  //     return value + '0'
  //   }
  //   // else there is no decimal places and no decimal
  //   return value + '.00'
  // }
}

validationFunctions.validateNullOrPositiveInteger = (value) => {
  let isValueValid = false
  let errorMessage
  let trueOrErrorMessage
  if (value === null) {
    isValueValid = true
  }
  else {
    trueOrErrorMessage = validationFunctions.validatePositiveInteger(value)
    if (typeof trueOrErrorMessage === 'boolean') {
      isValueValid = true
    }
    else {
      errorMessage = trueOrErrorMessage
    }
  }
  return isValueValid || errorMessage
}

validationFunctions.validatePositiveInteger = (value) => {
  let isValueValid = false
  const errorMessage = `Must be a positive integer number`
  let parsedInt
  try {
    // eslint-disable-next-line no-useless-escape
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
      parsedInt = Number(value)
      if (parsedInt >= 0) {
        isValueValid = true
      }
    }
    return isValueValid || errorMessage
  }
  catch (error) {
    return errorMessage
  }
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
