/* eslint-disable no-multi-spaces,key-spacing */
/**
 * Created by Martynas on 2017-12-02.
 */

import vv from '../variables.js'
import vf from './validationFunctions.js'

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

const stampsModel = {
  pictureOfFront: {
    isShownInStampsList: true,
    label: vv.stamps.pictureOfFront
  },
  pictureOfBack: {
    isShownInStampsList: false,
    label: vv.stamps.pictureOfBack
  },
  album: {
    isShownInStampsList: false,
    label: vv.stamps.pictureOfBack,
    validationFunctions: [
      vf.validateRequired()
    ]
  },
  numberScott: 'Scott number',
  numberMichael: 'Michael number',
  numberStanleyGibbons: 'Stanley Gibbons number',
  numberYvertEtTellier: 'Yvert et Tellier number',
  topics: 'Topics',
  faceDescription: 'Face description',
  nominalValue: 'Nominal value',
  country: 'Country',
  year: 'Year',
  comments: 'Comments',
  isCancelled: 'Cancelled',
  grade: 'Grade',
  structureType: 'Type of structure',
  structureQuantity: 'Quantity of stamps in structure',
  structureNumber: 'ID of structure',
  category: 'Category',
  quantity: 'Quantity of same specimen',
  isExhibited: 'Exhibited',
  isOnSale: 'On sale',
  marketValue: 'Market value',
  isAdhesive: 'Adhesive',
  isTagged: 'Tagged',
  isWithWatermark: 'Watermark',
  size: 'Size',
  perforation: 'Perforation',
  keepingPlace: 'Keeping place',
  buyPrice: 'Price of purchase',
  buyDate: 'Date of purchase',
  buyPlace: 'Place of purchase',
  sellPrice: 'Price of sale',
  sellDate: 'Date of sale',
  sellPlace: 'Place of sale'
}

module.exports = stampsModel
