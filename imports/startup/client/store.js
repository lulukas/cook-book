import { createStore } from 'redux'
import appReducer from './mainReducers'
import appMiddleware from './mainMiddleware'

const store = createStore(appReducer, {}, appMiddleware)

export default store
