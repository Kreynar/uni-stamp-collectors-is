/**
 * Created by Martynas on 2017-11-24.
 */

/* Variables object. */
const vv = {}

vv.mainColorOfTheme = 'orange'

vv.stamps = {
  titleAddNewStamp: 'Add New Stamp',
  titleEditStamp: 'Edit Stamp',
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
  pictureOfFront: 'Front picture',
  pictureOfBack: 'Back picture',
  album: 'Album',
  numberScott: 'Scott number',
  numberMichel: 'Michael number',
  numberStanleyGibbons: 'Stanley Gibbons number',
  numberYvertEtTellier: 'Yvert et Tellier number',
  year: 'Year',
  country: 'Country',
  nominalValue: 'Nominal value',
  topics: 'Topics',
  faceDescription: 'Face description',
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

vv.navigationDrawer = {}
vv.navigationDrawer.myStamps = 'myStamps'
vv.navigationDrawer.newStamp = 'newStamp'
vv.navigationDrawer.allStamps = 'allStamps'
vv.navigationDrawer.allCollectors = 'allCollectors'

vv.baseURL = `http://localhost:8081/`
vv.path = {}
vv.path.register = '/register'
vv.path.stamps = '/stamps'
vv.path.users = '/users'
vv.path.albums = '/albums'
vv.path.new = '/new'
vv.path.edit = '/edit'
vv.path.id = '/:id'
vv.path.name = '/:name'

module.exports = vv
