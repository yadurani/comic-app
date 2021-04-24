import { ADD_CATEGORY_COMIC, DELETE_CATEGORY_COMIC } from '../types/types'

export const addComicCategory = (category) => (dispatch, getState) => {
  const { Comic } = getState()
  const payload = {
    ...Comic.current,
    category,
  }
  dispatch({
    type: ADD_CATEGORY_COMIC,
    payload: payload,
  })
}

export const removeComic = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CATEGORY_COMIC,
    payload: id,
  })
}
