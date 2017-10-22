import { combineReducers } from 'redux'

/* Vendor reducers */

/* My reducers */
import authReducer from './auth.reducers'


/* Combine all reducers into one big state.
   The result is passed to the Provider in ../src/index.js */
export default combineReducers({
    auth: authReducer,
})
