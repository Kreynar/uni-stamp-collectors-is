/**
 * Created by Martynas on 2017-12-28.
 */

/*
 * 2017-12-28 - adding imitation of authentication system.
 */

import strings from '../strings.js'

const userStore = {
  state: () => ({
    usernameOfLoggedInUser: strings.testTemporaryUserUsername
  })
}

export default userStore
