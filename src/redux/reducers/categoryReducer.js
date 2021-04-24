import { ADD_CATEGORY_COMIC, DELETE_CATEGORY_COMIC } from '../types/types'

const initialState = {
  listSelected: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_COMIC:
      return { ...state, listSelected: [...state.listSelected, action.payload] }

    case DELETE_CATEGORY_COMIC:
      return {
        ...state,
        listSelected: [
          ...state.listSelected.filter((item) => item.num !== action.payload),
        ],
      }
    default:
      return state
  }
}
