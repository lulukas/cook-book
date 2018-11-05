import { combineReducers } from 'redux'  
import recipes from '../../reducers/recipes'

import client from './apollo'

const appReducer = combineReducers({  
    recipes,
});

export default appReducer