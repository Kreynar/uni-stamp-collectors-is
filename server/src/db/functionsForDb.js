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
      temporary_user_id_: vv.testTemporaryUserId,
      album_id_: stampFieldsAndValues.album,
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
      category_: stampFieldsAndValues.category,
      structure_type_: stampFieldsAndValues.structureType,
      structure_number_: stampFieldsAndValues.structureNumber,
      structure_stamp_count_: stampFieldsAndValues.structureStampCount,
      is_exhibited_: stampFieldsAndValues.isExhibited,
      specimen_count_: stampFieldsAndValues.specimenCount,
      is_on_sale_: stampFieldsAndValues.isOnSale,
      market_value_in_usd_: stampFieldsAndValues.marketValue,
      face_description_: stampFieldsAndValues.faceDescription,
      comment_: stampFieldsAndValues.comment,
      custom_attributes_: JSON.stringify(stampFieldsAndValues.arrayOfCustomAttributes)
      // album_id_: vv.testAlbumId
    })
    .returning('*')
  tracer.log(resultOfQuery)
  return resultOfQuery[0].id_
}

async function updateStamp (stampId, stampFieldsAndValues) {
  const resultOfQuery = await knex('public.stamp_')
    .update({
      temporary_user_id_: vv.testTemporaryUserId,
      album_id_: stampFieldsAndValues.album,
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
      category_: stampFieldsAndValues.category,
      structure_type_: stampFieldsAndValues.structureType,
      structure_number_: stampFieldsAndValues.structureNumber,
      structure_stamp_count_: stampFieldsAndValues.structureStampCount,
      is_exhibited_: stampFieldsAndValues.isExhibited,
      specimen_count_: stampFieldsAndValues.specimenCount,
      is_on_sale_: stampFieldsAndValues.isOnSale,
      market_value_in_usd_: stampFieldsAndValues.marketValue,
      face_description_: stampFieldsAndValues.faceDescription,
      comment_: stampFieldsAndValues.comment,
      custom_attributes_: JSON.stringify(stampFieldsAndValues.arrayOfCustomAttributes)
      // album_id_: vv.testAlbumId
    })
    .where({
      id_: stampId
    })
    .returning('*')
  tracer.log(resultOfQuery)
  return resultOfQuery[0].id_
}

async function deleteStamp (stampId) {
  const resultOfQuery = await knex('public.stamp_')
    .delete()
    .where({
      id_: stampId
    })
    .returning('*')
  tracer.log(resultOfQuery)
  return resultOfQuery[0].id_
}

async function insertIntoTopic (arrayOfTopicsNames) {
  const textOfQueryForInsertingTopics = `
  INSERT INTO topic_ (user_id_, name_)
  SELECT user_id_.user_id_, topic_name_.topic_name_
  FROM
    (VALUES (:userId ::BIGINT)) user_id_(user_id_)
    , UNNEST(:arrayOfTopicsNames ::TEXT[]) AS topic_name_(topic_name_)
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
    arrayOfTopicsNames: arrayOfTopicsNames
  })
  tracer.log(resultOfQuery)
  return resultOfQuery
}

async function deleteFromStampTopic (stampId) {
  const textOfQueryForDeletingFromStampTopic = `
  DELETE
  FROM stamp_topic_
  USING (VALUES (:stampId ::BIGINT)) stamp_id_(stamp_id_)
  WHERE stamp_topic_.stamp_id_ = stamp_id_.stamp_id_
  RETURNING stamp_id_.stamp_id_
  ;
  `
  const resultOfQuery = await knex.raw(textOfQueryForDeletingFromStampTopic, {
    stampId: stampId
  })
  tracer.log(resultOfQuery)
}

async function insertIntoStampTopic (insertedStampId, arrayOfTopicsNames) {
  const textOfQueryForInsertingIntoStampTopic = `
  INSERT INTO stamp_topic_(stamp_id_, topic_id_)
  SELECT stamp_id_.stamp_id_, topic_.id_
  FROM
    (VALUES (:stampId ::BIGINT)) stamp_id_(stamp_id_)
    , UNNEST(:arrayOfTopicsNames ::TEXT[]) AS topic_name_(topic_name_)
    , topic_
  WHERE topic_name_.topic_name_ = topic_.name_
  ;
  `
  const resultOfQuery = await knex.raw(textOfQueryForInsertingIntoStampTopic, {
    stampId: insertedStampId,
    arrayOfTopicsNames: arrayOfTopicsNames
  })
  tracer.log(resultOfQuery)
}

db.postStamps = async (stampFieldsAndValues) => {
  try {
    tracer.log(stampFieldsAndValues)
    const insertedStampId = await insertStamp(stampFieldsAndValues)
    await insertIntoTopic(stampFieldsAndValues.arrayOfTopics)
    await insertIntoStampTopic(insertedStampId, stampFieldsAndValues.arrayOfTopics)
    return insertedStampId
  }
  catch (error) {
    tracer.log(error)
    throw (error)
  }
  finally {

  }
}

db.putStampsStampId = async (stampId, stampFieldsAndValues) => {
  try {
    tracer.log(stampId, stampFieldsAndValues)
    const updatedStampId = await updateStamp(stampId, stampFieldsAndValues)
    /*
     * It would maybe be more correct when updating stamp to update topics in topic_ table in a little bit different way
     * than just using insertIntoTopic(stampFieldsAndValues.arrayOfTopics), but I don't think it's really necessary.
     */
    await insertIntoTopic(stampFieldsAndValues.arrayOfTopics)
    await deleteFromStampTopic(stampId)
    await insertIntoStampTopic(updatedStampId, stampFieldsAndValues.arrayOfTopics)
    return updatedStampId
  }
  catch (error) {
    tracer.log(error)
    throw (error)
  }
  finally {

  }
}

db.deleteStampsStampId = async (stampId) => {
  try {
    tracer.log(stampId)
    const deletedStampId = await deleteStamp(stampId)
    /*
     * It would maybe be more correct when deleting stamp to also delete topics from topic_ table,
     * but I don't think it's really necessary.
     */
    await deleteFromStampTopic(stampId)
    return deletedStampId
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
  const textOfQuery = `
    SELECT id_, name_ 
    FROM public.grade_ 
    ORDER BY mark_ DESC
    ;
    `
  try {
    let resultOfQuery = await knex.raw(textOfQuery)
    return resultOfQuery.rows
  }
  catch (error) {

  }
  finally {

  }
}

db.getArrayOfAlbumsIdsAndNames = async () => {
  const textOfQuery = `
    SELECT id_, name_ 
    FROM public.album_ 
    ORDER BY id_ ASC
    ;
    `
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

// db.getStamps = async () => {
//   const textOfQuery = `
//   SELECT stamp_.id_ AS "id", stamp_.temporary_user_id_ AS "userId", user_.name_ AS "username",
//   stamp_.temporary_picture_url_ AS "temporaryPictureUrl"
//   , stamp_.year_ AS "year", country_.name_ AS "country", stamp_.nominal_value_ AS "nominalValue"
//   , grade_.name_ AS "grade", stamp_.is_cancelled_ AS "isCancelled", ARRAY_AGG(topic_.name_) AS "arrayOfTopics"
//   FROM stamp_
//   LEFT JOIN country_ ON (stamp_.country_id_ = country_.id_)
//   LEFT JOIN grade_ ON (stamp_.grade_id_ = grade_.id_)
//   LEFT JOIN stamp_topic_ ON (stamp_.id_ = stamp_topic_.stamp_id_)
//   LEFT JOIN topic_ ON (stamp_topic_.topic_id_ = topic_.id_)
//   INNER JOIN user_ ON (stamp_.temporary_user_id_ = user_.id_)
//   GROUP BY stamp_.id_, country_.name_, grade_.name_, user_.name_
//   ORDER BY stamp_.modified_at_ DESC
//   ;
//   `
//   let resultOfQuery = await knex.raw(textOfQuery)
//   return resultOfQuery.rows
// }

db.getStatistics = async (username, query) => {
  let textOfQuery = `
  SELECT 
    COUNT(DISTINCT stamp_.id_) AS "numberOfStamps",
    COUNT(DISTINCT stamp_.temporary_user_id_) AS "numberOfUsers",
    MIN(user_.name_) AS "firstUser",
    MAX(user_.name_) AS "lastUser",
    COUNT(DISTINCT stamp_.year_) AS "numberOfYears",
    MIN(stamp_.year_) AS "firstYear",
    MAX(stamp_.year_) AS "lastYear",
    COUNT(DISTINCT stamp_.country_id_) AS "numberOfCountries",
    MIN(country_.name_) AS "firstCountry",
    MAX(country_.name_) AS "lastCountry",
    COUNT(DISTINCT stamp_.grade_id_) AS "numberOfGrades",
    MIN(grade_.mark_) AS "firstGrade",
    MAX(grade_.mark_) AS "lastGrade",
    TRIM(
        TO_CHAR(
             AVG (grade_.mark_),
             '99999999999999999D99'
           )
         ) AS "averageGrade"
  FROM 
    stamp_
    INNER JOIN country_ ON (stamp_.country_id_ = country_.id_)
    INNER JOIN grade_ ON (stamp_.grade_id_ = grade_.id_)
    INNER JOIN stamp_topic_ ON (stamp_.id_ = stamp_topic_.stamp_id_)
    INNER JOIN topic_ ON (stamp_topic_.topic_id_ = topic_.id_)
    INNER JOIN user_ ON (stamp_.temporary_user_id_ = user_.id_)
    INNER JOIN album_ ON (stamp_.album_id_ = album_.id_)
  WHERE 
    ((user_.name_ = :username ::TEXT) OR (:username ::TEXT IS NULL))
    AND ((album_.name_ = :album ::TEXT) OR (:album ::TEXT IS NULL))
    AND ((stamp_.year_ = :year ::SMALLINT) OR (:year ::SMALLINT IS NULL))
    AND ((stamp_.year_ >= :yearMin ::SMALLINT) OR (:yearMin ::SMALLINT IS NULL))
    AND ((stamp_.year_ <= :yearMax ::SMALLINT) OR (:yearMax ::SMALLINT IS NULL))
    AND ((country_.name_ = :country ::TEXT) OR (:country ::TEXT IS NULL))
    AND ((stamp_.nominal_value_ = :nominalValue ::TEXT) OR (:nominalValue ::TEXT IS NULL))
    AND ((grade_.name_ = :grade ::TEXT) OR (:grade ::TEXT IS NULL))
    AND ((stamp_.is_cancelled_ = :isCancelled ::BOOLEAN) OR (:isCancelled ::BOOLEAN IS NULL))
    AND ((topic_.name_ = :arrayOfTopics ::TEXT) OR (:arrayOfTopics ::TEXT IS NULL))
    AND ((stamp_.scott_ = :numberScott ::TEXT) OR (:numberScott ::TEXT IS NULL))
    AND ((stamp_.michel_ = :numberMichel ::TEXT) OR (:numberMichel ::TEXT IS NULL))
    AND ((stamp_.stanley_gibbons_ = :numberStanleyGibbons ::TEXT) OR (:numberStanleyGibbons ::TEXT IS NULL))
    AND ((stamp_.yvert_et_tellier_ = :numberYvertEtTellier ::TEXT) OR (:numberYvertEtTellier ::TEXT IS NULL))
    AND ((stamp_.category_ = :category ::TEXT) OR (:category ::TEXT IS NULL))
    AND ((stamp_.structure_type_ = :structureType ::TEXT) OR (:structureType ::TEXT IS NULL))
    AND ((stamp_.structure_number_ = :structureNumber ::TEXT) OR (:structureNumber ::TEXT IS NULL))
    AND ((stamp_.structure_stamp_count_ = :structureStampCount ::SMALLINT) OR (:structureStampCount ::SMALLINT IS NULL))
    AND ((stamp_.specimen_count_ = :specimenCount ::INTEGER) OR (:specimenCount ::INTEGER IS NULL))
    AND ((stamp_.market_value_in_usd_ = :marketValue ::INTEGER) OR (:marketValue ::INTEGER IS NULL))
    AND ((stamp_.face_description_ = :faceDescription ::TEXT) OR (:faceDescription ::TEXT IS NULL))
    AND ((stamp_.comment_ = :comment ::TEXT) OR (:comment ::TEXT IS NULL))
    AND (
          ( (:customAttributeLabel ::TEXT IS NULL) AND (:customAttributeValue ::TEXT IS NULL) )
          OR
          ( (stamp_.custom_attributes_ @> ('[{"label": "' || :customAttributeLabel ::TEXT || '" }]')::JSONB) AND (:customAttributeValue ::TEXT IS NULL) )
          OR
          ( (stamp_.custom_attributes_ @> ('[{"value": "' || :customAttributeValue ::TEXT || '" }]')::JSONB) AND (:customAttributeLabel ::TEXT IS NULL) )
          OR
          (stamp_.custom_attributes_ @> ('[{' ||
                                            '"label": "' || :customAttributeLabel ::TEXT || '",' ||
                                            '"value": "' || :customAttributeValue ::TEXT || '"' ||
                                         '}]')::JSONB)
        )
  ;
  `
  const bindings = {
    username: username,
    /*
     * By default, all SELECT query properties (except username) are null
     * (because knex would throw error, if we leave these properties undefined)...
     */
    album: null,
    year: null,
    yearMin: null,
    yearMax: null,
    country: null,
    nominalValue: null,
    grade: null,
    isCancelled: null,
    arrayOfTopics: null,
    numberScott: null,
    numberMichel: null,
    numberStanleyGibbons: null,
    numberYvertEtTellier: null,
    category: null,
    structureType: null,
    structureNumber: null,
    structureStampCount: null,
    specimenCount: null,
    marketValue: null,
    faceDescription: null,
    comment: null,
    customAttributeLabel: null,
    customAttributeValue: null,
    /*
     * ... but if query object from client contains any properties,
     * then these properties will overwrite default properties with same names.
     */
    ...query
  }
  let resultOfQuery = await knex.raw(textOfQuery, bindings)
  return resultOfQuery.rows
}

db.getStampsOrUsersUsernameStamps = async (username, query) => {
  let textOfQuery = `
  SELECT 
    stamp_.id_ AS "id", 
    stamp_.temporary_user_id_ AS "userId", user_.name_ AS "username",
    album_.name_ AS "album",
    stamp_.temporary_picture_url_ AS "temporaryPictureUrl", 
    stamp_.year_ AS "year", country_.name_ AS "country", stamp_.nominal_value_ AS "nominalValue", 
    grade_.name_ AS "grade", stamp_.is_cancelled_ AS "isCancelled", ARRAY_AGG(topic_.name_) AS "arrayOfTopics"
  FROM 
    stamp_
    INNER JOIN country_ ON (stamp_.country_id_ = country_.id_)
    INNER JOIN grade_ ON (stamp_.grade_id_ = grade_.id_)
    INNER JOIN stamp_topic_ ON (stamp_.id_ = stamp_topic_.stamp_id_)
    INNER JOIN topic_ ON (stamp_topic_.topic_id_ = topic_.id_)
    INNER JOIN user_ ON (stamp_.temporary_user_id_ = user_.id_)
    INNER JOIN album_ ON (stamp_.album_id_ = album_.id_)
  WHERE 
    ((user_.name_ = :username ::TEXT) OR (:username ::TEXT IS NULL))
    AND ((album_.name_ = :album ::TEXT) OR (:album ::TEXT IS NULL))
    AND ((stamp_.year_ = :year ::SMALLINT) OR (:year ::SMALLINT IS NULL))
    AND ((stamp_.year_ >= :yearMin ::SMALLINT) OR (:yearMin ::SMALLINT IS NULL))
    AND ((stamp_.year_ <= :yearMax ::SMALLINT) OR (:yearMax ::SMALLINT IS NULL))
    AND ((country_.name_ = :country ::TEXT) OR (:country ::TEXT IS NULL))
    AND ((stamp_.nominal_value_ = :nominalValue ::TEXT) OR (:nominalValue ::TEXT IS NULL))
    AND ((grade_.name_ = :grade ::TEXT) OR (:grade ::TEXT IS NULL))
    AND ((stamp_.is_cancelled_ = :isCancelled ::BOOLEAN) OR (:isCancelled ::BOOLEAN IS NULL))
    AND ((topic_.name_ = :arrayOfTopics ::TEXT) OR (:arrayOfTopics ::TEXT IS NULL))
    AND ((stamp_.scott_ = :numberScott ::TEXT) OR (:numberScott ::TEXT IS NULL))
    AND ((stamp_.michel_ = :numberMichel ::TEXT) OR (:numberMichel ::TEXT IS NULL))
    AND ((stamp_.stanley_gibbons_ = :numberStanleyGibbons ::TEXT) OR (:numberStanleyGibbons ::TEXT IS NULL))
    AND ((stamp_.yvert_et_tellier_ = :numberYvertEtTellier ::TEXT) OR (:numberYvertEtTellier ::TEXT IS NULL))
    AND ((stamp_.category_ = :category ::TEXT) OR (:category ::TEXT IS NULL))
    AND ((stamp_.structure_type_ = :structureType ::TEXT) OR (:structureType ::TEXT IS NULL))
    AND ((stamp_.structure_number_ = :structureNumber ::TEXT) OR (:structureNumber ::TEXT IS NULL))
    AND ((stamp_.structure_stamp_count_ = :structureStampCount ::SMALLINT) OR (:structureStampCount ::SMALLINT IS NULL))
    AND ((stamp_.specimen_count_ = :specimenCount ::INTEGER) OR (:specimenCount ::INTEGER IS NULL))
    AND ((stamp_.market_value_in_usd_ = :marketValue ::INTEGER) OR (:marketValue ::INTEGER IS NULL))
    AND ((stamp_.face_description_ = :faceDescription ::TEXT) OR (:faceDescription ::TEXT IS NULL))
    AND ((stamp_.comment_ = :comment ::TEXT) OR (:comment ::TEXT IS NULL))
    AND (
          ( (:customAttributeLabel ::TEXT IS NULL) AND (:customAttributeValue ::TEXT IS NULL) )
          OR
          ( (stamp_.custom_attributes_ @> ('[{"label": "' || :customAttributeLabel ::TEXT || '" }]')::JSONB) AND (:customAttributeValue ::TEXT IS NULL) )
          OR
          ( (stamp_.custom_attributes_ @> ('[{"value": "' || :customAttributeValue ::TEXT || '" }]')::JSONB) AND (:customAttributeLabel ::TEXT IS NULL) )
          OR
          (stamp_.custom_attributes_ @> ('[{' ||
                                            '"label": "' || :customAttributeLabel ::TEXT || '",' ||
                                            '"value": "' || :customAttributeValue ::TEXT || '"' ||
                                         '}]')::JSONB)
        )
  GROUP BY stamp_.id_, album_.name_, user_.name_, country_.name_, grade_.name_, grade_.mark_
  ORDER BY :sortField: :sortOrder
  ;
  `
  let sortField = 'stamp_.modified_at_'
  if (query.sortField !== undefined) {
    switch (query.sortField) {
      case 'modifiedAt':
        sortField = 'stamp_.modified_at_'
        break
      case 'numberScott':
        sortField = 'stamp_.scott_'
        break
      case 'numberMichel':
        sortField = 'stamp_.michel_'
        break
      case 'numberStanleyGibbons':
        sortField = 'stamp_.stanley_gibbons_'
        break
      case 'numberYvertEtTellier':
        sortField = 'stamp_.yvert_et_tellier_'
        break
      case 'year':
        sortField = 'stamp_.year_'
        break
      case 'country':
        sortField = 'stamp_.country_id_'
        break
      case 'grade':
        // sortField = 'stamp_.grade_id_'
        sortField = 'grade_.mark_'
        break
      case 'isCancelled':
        sortField = 'stamp_.is_cancelled_'
        break
      case 'specimenCount':
        sortField = 'stamp_.specimen_count_'
        break
      case 'marketValue':
        sortField = 'stamp_.market_value_in_usd_'
        break
      case 'album':
        sortField = 'stamp_.album_id_'
        break
      default:
        sortField = 'stamp_.modified_at_'
        break
    }
  }
  let sortOrder = knex.raw('DESC')
  if (query.sortOrder === 'asc') {
    sortOrder = knex.raw('ASC')
  }
  const bindings = {
    username: username,
    /*
     * By default, all SELECT query properties (except username) are null
     * (because knex would throw error, if we leave these properties undefined)...
     */
    album: null,
    year: null,
    yearMin: null,
    yearMax: null,
    country: null,
    nominalValue: null,
    grade: null,
    isCancelled: null,
    arrayOfTopics: null,
    numberScott: null,
    numberMichel: null,
    numberStanleyGibbons: null,
    numberYvertEtTellier: null,
    category: null,
    structureType: null,
    structureNumber: null,
    structureStampCount: null,
    specimenCount: null,
    marketValue: null,
    faceDescription: null,
    comment: null,
    customAttributeLabel: null,
    customAttributeValue: null,
    /*
     * ... but if query object from client contains any properties,
     * then these properties will overwrite default properties with same names.
     */
    ...query,
    /*
     * Gotta be careful, to always keep these v sortField and sortOrder key definitions BELOW ...query,
     * otherwise, query.sortField and query.sortOrder will overwrite them (and this will cause bugs).
     */
    sortField: sortField,
    sortOrder: sortOrder
  }
  let resultOfQuery = await knex.raw(textOfQuery, bindings)
  return resultOfQuery.rows
}

db.getStampsStampId = async (stampId) => {
  const textOfQuery = `
  SELECT stamp_.id_ AS "id"
    , stamp_.temporary_user_id_ AS "userId", user_.name_ AS "username", album_.name_ AS "album"
    , stamp_.temporary_picture_url_ AS "temporaryPictureUrl"
    , stamp_.scott_ AS "numberScott", stamp_.michel_ AS "numberMichel"
    , stamp_.stanley_gibbons_ AS "numberStanleyGibbons", stamp_.yvert_et_tellier_ AS "numberYvertEtTellier"
    , stamp_.year_ AS "year", stamp_.country_id_ AS country, stamp_.nominal_value_ AS "nominalValue"
    , stamp_.grade_id_ AS "grade", stamp_.is_cancelled_ AS "isCancelled"
    , stamp_.category_ AS "category"
    , stamp_.structure_type_ AS "structureType", stamp_.structure_number_ AS "structureNumber"
    , stamp_.structure_stamp_count_ AS "structureStampCount", stamp_.is_exhibited_ AS "isExhibited"
    , stamp_.specimen_count_ AS "specimenCount", stamp_.is_on_sale_ AS "isOnSale"
    , stamp_.market_value_in_usd_ AS "marketValue", stamp_.face_description_ AS "faceDescription"
    , stamp_.comment_ AS "comment", stamp_.custom_attributes_ AS "arrayOfCustomAttributes"
    , ARRAY_AGG(topic_.name_) AS "arrayOfTopics"
  FROM stamp_
  LEFT JOIN stamp_topic_ ON (stamp_.id_ = stamp_topic_.stamp_id_)
  LEFT JOIN topic_ ON (stamp_topic_.topic_id_ = topic_.id_)
  INNER JOIN user_ ON (stamp_.temporary_user_id_ = user_.id_)
  INNER JOIN album_ ON (stamp_.album_id_ = album_.id_)
  WHERE (stamp_.id_ = :stampId ::BIGINT)
  GROUP BY stamp_.id_, user_.name_, album_.name_
  ;
  `
  let resultOfQuery = await knex.raw(textOfQuery, {
    stampId: stampId
  })
  return resultOfQuery.rows[0]
}

db.getUsers = async () => {
  const textOfQuery = `
  SELECT user_.id_ AS "id", user_.temporary_picture_url_ AS "temporaryPictureUrl", user_.rating_ AS "rating", user_.name_ AS "username",
  user_.email_address_ AS "emailAddress", user_.is_email_displayed_ AS "isEmailDisplayed", 
  COUNT(stamp_.id_) AS "stampCount", user_.last_seen_at_ AS "lastSeenAt"
  FROM user_
  LEFT JOIN stamp_ ON (user_.id_ = stamp_.temporary_user_id_)
  GROUP BY user_.id_, user_.temporary_picture_url_, user_.rating_, user_.name_, user_.email_address_, 
  user_.is_email_displayed_, user_.last_seen_at_
  ORDER BY "stampCount" DESC
  `
  let resultOfQuery = await knex.raw(textOfQuery)
  return resultOfQuery.rows
}

module.exports = db
