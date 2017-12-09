/* eslint-disable no-multi-str */
/**
 * Created by Martynas on 2017-11-25.
 */

// const tracer = require('tracer').colorConsole()
// const tracer = require('tracer').colorConsole({level: 'warn'}
const vv = require('../variables.js')
const tracer = require('tracer').console(vv.tracerOutputCustomization)
const config = require('../config/config.js')
const knex = require('knex')(config.infoForDbConnection)
const db = {}

// /*
//  * I'm using this pool.query wrapper, because later on I might add some logging or smth into body of db.query(),
//  * in addition to pool.query being there.
//  * Smth like it's suggested in node-postgres.com >>> Guides >>> Project Structure.
//  */
// db.query = (text, params) => knex.query(text, params)

db.postUsers = async (credentials) => {
  const textOfQuery = '\
  INSERT INTO public.user_(\
  name_, password_, first_name_, last_name_, email_address_)\
  VALUES\
  (?, ?, ?, ?, ?)\
  RETURNING *\
  '
  try {
    // const testTextOfQuery = '\
    // SELECT id_, name_ \
    // FROM public.album_ \
    // WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL)\
    // AND (user_id_=?  OR  user_id_ IS NULL);'
    // const testUserId = 1
    // let testResultOfQuery = await knex.raw(testTextOfQuery, [testUserId])
    // console.log('@@@27', testResultOfQuery)
    tracer.log(credentials)
    let resultOfQuery = await knex.raw(textOfQuery, [
      credentials.username,
      credentials.password,
      credentials.firstName,
      credentials.lastName,
      credentials.email
    ])
    // .returning('*')
    tracer.log(resultOfQuery)
    return resultOfQuery
  }
  catch (error) {
    tracer.log(error)
    throw (error)
  }
  finally {

  }
}

db.postStamps = async (stampFieldsAndValues) => {
  try {
    tracer.log(stampFieldsAndValues)
    let resultOfQuery = await knex('public.stamp_')
      .insert({
        scott_: stampFieldsAndValues.numberScott,
        michel_: stampFieldsAndValues.numberMichel,
        stanley_gibbons_: stampFieldsAndValues.numberStanleyGibbons,
        yvert_et_tellier_: stampFieldsAndValues.numberYvertEtTellier,
        year_: stampFieldsAndValues.year,
        album_id_: vv.db.stamps.testAlbumId
      })
      .returning('*')
    // .returning('*')
    tracer.log(resultOfQuery)
    return resultOfQuery
  }
  catch (error) {
    tracer.log(error)
    throw (error)
  }
  finally {

  }
}

db.getCountriesIdsAndNames = async () => {
  const textOfQuery = '\
    SELECT id_, name_ \
    FROM public.country_ \
    WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL);'
  try {
    let resultOfQuery = await db.query(textOfQuery)
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

db.getGradesIdsAndNames = async () => {
  const textOfQuery = '\
    SELECT id_, name_ \
    FROM public.grade_ \
    WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL);'
  try {
    let resultOfQuery = await db.query(textOfQuery)
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

db.getAlbumsIdsAndNames = async (userId) => {
  const textOfQuery = '\
    SELECT id_, name_ \
    FROM public.album_ \
    WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL)\
    AND (user_id_=$1  OR  user_id_ IS NULL);'
  try {
    let resultOfQuery = await db.query(textOfQuery)
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

db.getTopicsIdsAndNames = async (userId) => {
  const textOfQuery = '\
    SELECT id_, name_\
    FROM public.topic_\
    WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL)\
    AND (user_id_=$1  OR  user_id_ IS NULL);'
  try {
    let resultOfQuery = await db.query(textOfQuery, [userId])
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

module.exports = db
