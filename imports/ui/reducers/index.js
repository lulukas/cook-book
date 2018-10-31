import { combineReducers } from 'redux'  
import recipes from './recipes'

const appReducer = combineReducers({  
    recipes
});

export default appReducer