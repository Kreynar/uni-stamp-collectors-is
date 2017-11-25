/**
 * Created by Martynas on 2017-11-25.
 */

module.exports = {
  async register (req, res) {
    try {
      const response =
      res.send({
        message: `user registered? (email: ${req.body.email}) -Martynas`
      })
    }
    catch (error) {
      res.status(400).send({
        errorString: 'This email acc is already in use'
      })
    }
    finally {
    }
  }
}
