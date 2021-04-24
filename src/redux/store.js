import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore } from 'redux-persist'
import reduxThunk from 'redux-thunk'
import { configurePersist } from './persist'
import reducers from './reducers/'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persists = configurePersist(reducers)

const store = createStore(
  persists.reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
)

export default store

export const persistor = persistStore(store)
