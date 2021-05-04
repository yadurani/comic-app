import { FETCH_COMIC_ID, RATE_COMIC, CATEGORY_COMIC } from '../types/types'
import fetchComicId from '../../services/api'

export const getComicById = (id) => async (dispatch, getState) => {
  const { Comic } = getState()
  const { data } = await fetchComicId(id)
  const isExtistComics = Comic.comics.some((comic) => comic.num === id)

  if (isExtistComics) {
    const comicExist = Comic.comics.find((comic) => comic.num === id)
    const payloadExist = {
      current: comicExist,
    }
    dispatch({
      type: FETCH_COMIC_ID,
      payload: payloadExist,
    })
  }

  if (!isExtistComics) {
    const payload = {
      current: { ...data, rate: 0 },
      comics: [...Comic.comics, { ...data, rate: 0 }],
    }
    dispatch({
      type: FETCH_COMIC_ID,
      payload: payload,
    })
  }
}

export const rateComic = (id, rate) => (dispatch, getState) => {
  const { Comic } = getState()
  const payload = {
    current: { ...Comic.current, rate: Number(rate) },
    comics: Comic.comics.map((comicItem) =>
      comicItem.num === id ? { ...comicItem, rate: Number(rate) } : comicItem
    ),
  }
  dispatch({ type: RATE_COMIC, payload: payload })
}

export const updateComic = (id, category) => (dispatch, getState) => {
  console.log(id, category)
  const { Comic } = getState()
  const payload = {
    current: { ...Comic.current, category },
    comics: Comic.comics.map((comicItem) =>
      comicItem.num === id ? { ...comicItem, category } : comicItem
    ),
  }
  dispatch({ type: CATEGORY_COMIC, payload: payload })
}
