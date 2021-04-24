import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export function configurePersist(rootReducer) {
  const persistConfig = {
    key: 'Masiv | xckd',
    storage,
    version: 1,
    whitelist: ['Category', 'Comic'],
  }
  return {
    reducer: persistReducer(persistConfig, rootReducer),
  }
}
