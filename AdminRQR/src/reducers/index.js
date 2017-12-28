import { combineReducers } from 'redux'

import menus from './menu-reducer'
import order from './order-reducer'
import tab from './tab-reducer'
import page from './page-reducer'

export default combineReducers({
  menus : menus,
  order : order,
  tab   : tab,
  page  : page,
})
