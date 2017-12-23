/**
 * Created by Martynas on 2017-11-24.
 */

/* Variables object. */
const vv = {}

vv.mainColorOfTheme = 'orange'
vv.secondaryColorOfTheme = 'grey lighten-3'

vv.stamps = {
  arrayOfCategoriesNames: [
    'Definitive',
    'Airmail',
    'Commemorative',
    'Postage Due'
  ],
  arrayOfStructureTypesNames: [
    'Sheetlet',
    'Souvenir sheet',
    'Miniature sheet',
    'Corner block',
    'Coil Strip'
  ],
  // pictureOfFront: {
  //   name: 'pictureOfFront',
  //   label: 'Front picture'
  // },
  // pictureOfBack: {
  //   name: 'pictureOfBack',
  //   label: 'Back picture'
  // },
  // album: {
  //   name: 'album',
  //   label: 'Album'
  // },
  // numberScott: {
  //   name: 'numberScott',
  //   label: 'Scott number'
  // },
  // numberMichael: {
  //   name: 'numberMichael',
  //   label: 'Michael number'
  // },
  // /*
  //  * Later gotta fix following fields v same as ^.
  //  */
  temporaryPictureUrl: 'Stamp picture URL',
  pictureOfFront: 'Front picture',
  pictureOfBack: 'Back picture',
  album: 'Album',
  numberScott: 'Scott number',
  numberMichel: 'Michel number',
  numberStanleyGibbons: 'Stanley Gibbons number',
  numberYvertEtTellier: 'Yvert et Tellier number',
  year: 'Year',
  country: 'Country',
  nominalValue: 'Nominal value',
  arrayOfTopics: 'Topics',
  faceDescription: 'Face description',
  comment: 'Comments',
  isCancelled: 'Cancelled',
  grade: 'Grade',
  structureType: 'Type of structure',
  structureStampCount: 'Quantity of stamps in structure',
  structureNumber: 'ID of structure',
  category: 'Category',
  specimenCount: 'Quantity of same specimen',
  isExhibited: 'Exhibited',
  // isExhibited: 'Hidden from other users',
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

vv.navigationDrawer = {}
vv.navigationDrawer.myStamps = 'myStamps'
vv.navigationDrawer.newStamp = 'newStamp'
vv.navigationDrawer.allStamps = 'allStamps'
vv.navigationDrawer.allCollectors = 'allCollectors'

vv.stampDialog = {
  mode: {
    create: 'create',
    edit: 'edit',
    view: 'view'
  },
  title: {
    create: 'Add New Stamp',
    edit: 'Edit Stamp',
    view: 'Stamp Info'
  }
}

vv.baseURL = `http://localhost:8081/`
vv.path = {}
vv.path.register = '/register'
vv.path.stamps = '/stamps'
vv.path.users = '/users'
vv.path.albums = '/albums'
vv.path.new = '/new'
vv.path.edit = '/edit'
// vv.path.albumId = '/:albumId'
// vv.path.stampId = '/:stampId'
// vv.path.username = '/:username'
vv.path.countries = '/countries'
vv.path.grades = '/grades'
vv.path.topics = '/topics'

module.exports = vv
