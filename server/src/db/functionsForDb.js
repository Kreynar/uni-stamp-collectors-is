/* eslint-disable no-multi-str */
/**
 * Created by Martynas on 2017-11-25.
 */

const config = require('../config/config.js')
const knex = require('knex')(config.infoForDbConnection)
const db = {}

/*
 * I'm using this pool.query wrapper, because later on I might add some logging or smth into body of db.query(),
 * in addition to pool.query being there.
 * Smth like it's suggested in node-postgres.com >>> Guides >>> Project Structure.
 */
db.query = (text, params) => knex.query(text, params)

db.postUsers = async (userInfo) => {
  const textOfQuery =
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
