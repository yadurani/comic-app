import { FETCH_COMIC_ID, RATE_COMIC, CATEGORY_COMIC } from '../types/types'

export default (state = { current: {}, comics: [] }, action) => {
  switch (action.type) {
    case FETCH_COMIC_ID:
      return { ...state, ...action.payload }
    case RATE_COMIC:
      return { ...state, ...action.payload }
    case CATEGORY_COMIC:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
