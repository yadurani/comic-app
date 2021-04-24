import axios from 'axios'

const URL_API_COMIC = 'http://xkcd.com/'
const URL_API_JSON = '/info.0.json'
const URL_PROXY = 'https://api.allorigins.win/raw?url='

const fetchComicId = async (id = '') => {
  const URL_COMPOSE_CURRENT = URL_PROXY + URL_API_COMIC + id + URL_API_JSON
  return await axios.get(URL_COMPOSE_CURRENT)
}

export default fetchComicId
