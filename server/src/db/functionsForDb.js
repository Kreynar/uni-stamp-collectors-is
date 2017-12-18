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

async function insertStamp (stampFieldsAndValues) {
  const resultOfQuery = await knex('public.stamp_')
    .insert({
      temporary_picture_url_: stampFieldsAndValues.temporaryPictureUrl,
      scott_: stampFieldsAndValues.numberScott,
      michel_: stampFieldsAndValues.numberMichel,
      stanley_gibbons_: stampFieldsAndValues.numberStanleyGibbons,
      yvert_et_tellier_: stampFieldsAndValues.numberYvertEtTellier,
      year_: stampFieldsAndValues.year,
      country_id_: stampFieldsAndValues.country,
      nominal_value_: stampFieldsAndValues.nominalValue,
      grade_id_: stampFieldsAndValues.grade,
      is_cancelled_: stampFieldsAndValues.isCancelled,
      temporary_user_id_: vv.testTemporaryUserId,
      category_: stampFieldsAndValues.category,
      structure_type_: stampFieldsAndValues.structureType,
      structure_number_: stampFieldsAndValues.structureNumber,
      structure_stamp_count_: stampFieldsAndValues.structureStampCount,
      custom_attributes_: JSON.stringify(stampFieldsAndValues.arrayOfCustomAttributes)
      // album_id_: vv.testAlbumId
    })
    .returning('*')
  tracer.log(resultOfQuery)
  return resultOfQuery[0].id_
}

async function insertTopic (arrayOfTopicNames) {
  const textOfQueryForInsertingTopics = `
INSERT INTO topic_ (user_id_, name_)
SELECT user_id_.user_id_, topic_name_.topic_name_
FROM
  (VALUES (:userId ::BIGINT)) user_id_(user_id_)
  , UNNEST(:arrayOfTopicNames ::TEXT[]) AS topic_name_(topic_name_)
WHERE NOT EXISTS
(
  SELECT 999
  FROM topic_
  WHERE (
    ( topic_.name_ = topic_name_.topic_name_ )
    AND ( (topic_.user_id_ IS NULL) OR (topic_.user_id_ = user_id_.user_id_) )
  )
)
;
  `
  const resultOfQuery = await knex.raw(textOfQueryForInsertingTopics, {
    userId: vv.testTemporaryUserId,
    arrayOfTopicNames: arrayOfTopicNames
  })
  tracer.log(resultOfQuery)
  return resultOfQuery
}

// async function deleteFromStampTopic (stampId) {
//   const textOfQueryForDeletingFromStampTopic = `
// DELETE
// FROM stamp_topic_
// USING (VALUES (:stampId ::BIGINT)) stamp_id_(stamp_id_)
// WHERE stamp_topic_.stamp_id_ = stamp_id_.stamp_id_
// RETURNING stamp_topic_.stamp_id_
// ;
//     `
//   const resultOfQuery = await knex.raw(textOfQueryForDeletingFromStampTopic, {
//     stampId: stampId
//   })
//   tracer.log(resultOfQuery)
// }

async function insertIntoStampTopic (insertedStampId, arrayOfTopicNames) {
  const textOfQueryForInsertingIntoStampTopic = `
INSERT INTO stamp_topic_(stamp_id_, topic_id_)
SELECT stamp_id_.stamp_id_, topic_.id_
FROM
  (VALUES (:stampId ::BIGINT)) stamp_id_(stamp_id_)
  , UNNEST(:arrayOfTopicNames ::TEXT[]) AS topic_name_(topic_name_)
  , topic_
WHERE topic_name_.topic_name_ = topic_.name_
;
  `
  const resultOfQuery = await knex.raw(textOfQueryForInsertingIntoStampTopic, {
    stampId: insertedStampId,
    arrayOfTopicNames: arrayOfTopicNames
  })
  tracer.log(resultOfQuery)
}

db.postStamps = async (stampFieldsAndValues) => {
  try {
    tracer.log(stampFieldsAndValues)
    const insertedStampId = await insertStamp(stampFieldsAndValues)
    await insertTopic(stampFieldsAndValues.topics)
    await insertIntoStampTopic(insertedStampId, stampFieldsAndValues.topics)
    return insertedStampId
  }
  catch (error) {
    tracer.log(error)
    throw (error)
  }
  finally {

  }
}

db.getArrayOfCountriesIdsAndNames = async () => {
  const textOfQuery = '\
    SELECT id_, name_ \
    FROM public.country_ \
    WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL);'
  try {
    let resultOfQuery = await knex.raw(textOfQuery)
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

db.getArrayOfGradesIdsAndNames = async () => {
  const textOfQuery = '\
    SELECT id_, name_ \
    FROM public.grade_ \
    WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL);'
  try {
    let resultOfQuery = await knex.raw(textOfQuery)
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

// db.getAlbumsIdsAndNames = async (userId) => {
//   const textOfQuery = '\
//     SELECT id_, name_ \
//     FROM public.album_ \
//     WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL)\
//     AND (user_id_=$1  OR  user_id_ IS NULL);'
//   try {
//     let resultOfQuery = await db.query(textOfQuery)
//     return resultOfQuery.rows
//   }
//   catch (error) {
//
//   }
//   finally {
//
//   }
// }

db.getArrayOfTopicsIdsAndNames = async (userId) => {
  const textOfQuery = '\
    SELECT id_, name_\
    FROM public.topic_\
    WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL)\
    AND (user_id_=?  OR  user_id_ IS NULL);'
  // const textOfQuery = '\
  //   SELECT id_, name_\
  //   FROM public.topic_\
  //   WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL);'
  // const textOfQuery = '\
  //   SELECT id_, name_\
  //   FROM public.topic_\
  //   WHERE (NOT is_deleted_  OR  is_deleted_ IS NULL)\
  //   AND (user_id_ IS NULL);'
  try {
    // let resultOfQuery = await db.query(textOfQuery, [userId])
    let resultOfQuery = await knex.raw(textOfQuery, [userId])
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

db.getStamps = async () => {
  const textOfQuery = '\
  SELECT stamp_.id_ AS id, stamp_.temporary_picture_url_ AS "temporaryPictureUrl"\
  , stamp_.year_ AS year, country_.name_ AS country, stamp_.nominal_value_ AS "nominalValue"\
  , grade_.name_ AS grade, stamp_.is_cancelled_ AS "isCancelled", ARRAY_AGG(topic_.name_) AS topics\
  FROM stamp_\
  LEFT JOIN country_ ON (stamp_.country_id_ = country_.id_)\
  LEFT JOIN grade_ ON (stamp_.grade_id_ = grade_.id_)\
  LEFT JOIN stamp_topic_ ON (stamp_.id_ = stamp_topic_.stamp_id_)\
  LEFT JOIN topic_ ON (stamp_topic_.topic_id_ = topic_.id_)\
  GROUP BY stamp_.id_, country_.name_, grade_.name_\
  ORDER BY stamp_.id_ ASC\
  ;\
  '
  let resultOfQuery = await knex.raw(textOfQuery)
  return resultOfQuery.rows
}

db.getStampsStampId = async (stampId) => {
  const textOfQuery = '\
  SELECT stamp_.id_ AS id, stamp_.temporary_picture_url_ AS "temporaryPictureUrl"\
  , stamp_.year_ AS year, country_.name_ AS country, stamp_.nominal_value_ AS "nominalValue"\
  , grade_.name_ AS grade, stamp_.is_cancelled_ AS "isCancelled", ARRAY_AGG(topic_.name_) AS topics\
  FROM stamp_\
  LEFT JOIN country_ ON (stamp_.country_id_ = country_.id_)\
  LEFT JOIN grade_ ON (stamp_.grade_id_ = grade_.id_)\
  LEFT JOIN stamp_topic_ ON (stamp_.id_ = stamp_topic_.stamp_id_)\
  LEFT JOIN topic_ ON (stamp_topic_.topic_id_ = topic_.id_)\
  WHERE (stamp_.id_ = :stampId ::BIGINT)\
  GROUP BY stamp_.id_, country_.name_, grade_.name_\
  ORDER BY stamp_.id_ ASC\
  ;\
  '
  let resultOfQuery = await knex.raw(textOfQuery, {
    stampId: stampId
  })
  return resultOfQuery.rows
}

db.getUsersUsernameStamps = async (username) => {
  const textOfQuery = '\
  SELECT stamp_.id_ AS id, stamp_.temporary_picture_url_ AS "temporaryPictureUrl", \
  stamp_.year_ AS year, country_.name_ AS country, stamp_.nominal_value_ AS "nominalValue", \
  grade_.name_ AS grade, stamp_.is_cancelled_ AS "isCancelled", ARRAY_AGG(topic_.name_) AS topics\
  FROM stamp_\
  LEFT JOIN country_ ON (stamp_.country_id_ = country_.id_)\
  LEFT JOIN grade_ ON (stamp_.grade_id_ = grade_.id_)\
  LEFT JOIN stamp_topic_ ON (stamp_.id_ = stamp_topic_.stamp_id_)\
  LEFT JOIN topic_ ON (stamp_topic_.topic_id_ = topic_.id_)\
  INNER JOIN user_ ON (stamp_.temporary_user_id_ = user_.id_)\
  WHERE (user_.name_ = :username ::TEXT)\
  GROUP BY stamp_.id_, country_.name_, grade_.name_\
  ORDER BY stamp_.id_ ASC\
  ;\
  '
  let resultOfQuery = await knex.raw(textOfQuery, {
    username: username
  })
  return resultOfQuery.rows
}

module.exports = db
