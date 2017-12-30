/**
 * Created by Martynas on 2017-12-28.
 */

/*
 * 2017-12-28 - adding imitation of authentication system.
 */

import strings from '../strings.js'
import axios from 'axios'

async function getArrayOfUsersFromServer () {
  try {
    const serverResponse = await axios.create({
      baseURL: strings.baseURL
    }).get(strings.path.users)
    const arrayOfUsers = serverResponse.data
    console.log('@@@ getArrayOfUsersFromServer serverResponse.data', arrayOfUsers)
    return arrayOfUsers
  }
  catch (error) {
    const errorMessage = error.response.data.errorMessage
    console.log('@@@ error in getArrayOfUsersFromServer:  ', errorMessage)
  }
  finally {
  }
}

const userStore = {
  state: () => ({
    usernameOfLoggedInUser: strings.testTemporaryUserUsername,
    arrayOfUsers: []
  }),
  mutations: {
    setArrayOfUsers (state, arrayOfUsers) {
      state.arrayOfUsers = arrayOfUsers
    }
  },
  actions: {
    async loadArrayOfUsersFromServer (context) {
      const arrayOfUsers = await getArrayOfUsersFromServer()
      context.commit('setArrayOfUsers', arrayOfUsers)
    }
  }
}

export default userStore
