/* eslint-disable no-multi-spaces,key-spacing */
/**
 * Created by Martynas on 2017-12-02.
 */

import strings from '../strings.js'
import vf from '../validationFunctions.js'

const ss = strings.stamps

// eslint-disable-next-line no-unused-vars
const metadataZurnalu = {

  /*
   <aliasStulpelioArbaFieldo>     <arRodytLentelej> <arFiksuojamaDb> <pavadinimasStulpelio> <pavadinimasFieldo>
   */
  fields: {
    checkboxTrynimoIrKeitimo:     [true,                 false,         '',                        ''],
    id:                         [false,                true,          '',                        '_id'],
    arIstrintas:                [false,                true,          '',                       'aristrintas'],
    nr:                         [true,                 false,         'Nr.',                     ''],
    pavadinimas1:               [true,                 true,          'Pavadinimas',            'pavadinimas1'],
    pavadinimas2:               [true,                 true,          'Kitas pavadinimas',      'pavadinimas2'],
    issn:                       [true,                 true,          'ISSN',                    'issn'],
    leidejas:                   [true,                 true,          'Leidėjas',               'leidejas'],
    db:                         [true,                 true,          'Duomenų bazė(-ės)',      'db'],
    pastabos:                   [true,                 true,          'Pastabos',               'pastabos']
  },
  indexes: {
    arRodytLentelej: 0,
    arFiksuojamaDb: 1,
    pavadinimasStulpelio: 2,
    pavadinimasFieldo: 3
  }
}

// eslint-disable-next-line no-unused-vars
const metadataZurnalu2 = {
  checkboxTrynimoIrKeitimo: {
    arRodytLentelej: true,
    arFiksuojamaDb: false,
    pavadinimasStulpelio: '',
    pavadinimasFieldo: ''
  },
  id: {
    arRodytLentelej: false,
    arFiksuojamaDb: true,
    pavadinimasStulpelio: '',
    pavadinimasFieldo: '_id'
  }
}

export default {
  pictureOfFront: {
    isShownInStampsList: true,
    label: ss.pictureOfFront
  },
  pictureOfBack: {
    isShownInStampsList: false,
    label: ss.pictureOfBack
  },
  album: {
    isShownInStampsList: true,
    label: ss.pictureOfBack,
    validationFunctions: [
      vf.validateRequired()
    ]
  },
  numberScott: {
    isShownInStampsList: true,
    label: ss.numberScott
  },
  numberMichel: {
    isShownInStampsList: true,
    label: ss.numberMichel
  },
  numberStanleyGibbons: {
    isShownInStampsList: true,
    label: ss.numberStanleyGibbons
  },
  numberYvertEtTellier: {
    isShownInStampsList: true,
    label: ss.numberYvertEtTellier
  },
  year: {
    isShownInStampsList: true,
    label: ss.year,
    validationFunctions: [
      vf.validateRequired,
      vf.validateStampPublishYear
    ]
  },
  country: {
    isShownInStampsList: true,
    label: ss.country,
    validationFunctions: [
      vf.validateRequired
    ]
  },
  nominalValue: {
    isShownInStampsList: true,
    label: ss.nominalValue,
    validationFunctions: [
      vf.validateRequired
    ]
  },
  topics: {
    isShownInStampsList: false,
    label: ss.topics
  },
  faceDescription: {
    isShownInStampsList: false,
    label: ss.faceDescription
  },
  comments: {
    isShownInStampsList: false,
    label: ss.comments
  },
  isCancelled: {
    isShownInStampsList: false,
    label: ss.isCancelled
  },
  grade: {
    isShownInStampsList: false,
    label: ss.grade
  },
  structureType: {
    isShownInStampsList: false,
    label: ss.structureType
  },
  structureStampCount: {
    isShownInStampsList: false,
    label: ss.structureStampCount
  },
  structureNumber: {
    isShownInStampsList: false,
    label: ss.structureNumber
  },
  category: {
    isShownInStampsList: false,
    label: ss.category
  },
  quantity: {
    isShownInStampsList: false,
    label: ss.quantity
  },
  isExhibited: {
    isShownInStampsList: false,
    label: ss.isExhibited
  },
  isOnSale: {
    isShownInStampsList: false,
    label: ss.isOnSale
  },
  marketValue: {
    isShownInStampsList: false,
    label: ss.marketValue
  },
  isAdhesive: {
    isShownInStampsList: false,
    label: ss.isAdhesive
  },
  isTagged: {
    isShownInStampsList: false,
    label: ss.isTagged
  },
  isWithWatermark: {
    isShownInStampsList: false,
    label: ss.isWithWatermark
  },
  size: {
    isShownInStampsList: false,
    label: ss.size
  },
  perforation: {
    isShownInStampsList: false,
    label: ss.perforation
  },
  keepingPlace: {
    isShownInStampsList: false,
    label: ss.keepingPlace
  },
  buyPrice: {
    isShownInStampsList: false,
    label: ss.buyPrice
  },
  buyDate: {
    isShownInStampsList: false,
    label: ss.buyDate
  },
  buyPlace: {
    isShownInStampsList: false,
    label: ss.buyPlace
  },
  sellPrice: {
    isShownInStampsList: false,
    label: ss.sellPrice
  },
  sellDate: {
    isShownInStampsList: false,
    label: ss.sellDate
  },
  sellPlace: {
    isShownInStampsList: false,
    label: ss.sellPlace
  }
}
