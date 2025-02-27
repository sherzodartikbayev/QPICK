import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from '../cart-slice/cart-slice'
import counterReducer from '../counter-slice/counter-slice'
import favoritesReducer from '../favorites-slice/favorites-slice'

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	cart: cartReducer,
	counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
