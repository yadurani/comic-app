import { combineReducers } from 'redux'
import Comic from './comicReducer'
import Category from './categoryReducer'

export default combineReducers({
  Comic,
  Category,
})
