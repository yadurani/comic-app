import { createSelector } from 'reselect'

export const currentComicSelector = createSelector(
  (state) => state.Comic.current,
  (v) => v
)

export const comicsSelector = createSelector(
  (state) => state.Comic.comics,
  (v) => v
)

export const categoriesSelector = createSelector(
  (state) => state.Category.listSelected,
  (v) => v
)

export const countCategoriesSelector = (category) =>
  createSelector(
    (state) => state.Category.listSelected,
    (listCategories) =>
      listCategories.filter((item) => item.category === category).length
  )
