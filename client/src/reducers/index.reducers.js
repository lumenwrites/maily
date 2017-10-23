import { combineReducers } from 'redux'

/* Vendor reducers */

/* My reducers */
import profilesReducer from './profiles.reducers'


/* Combine all reducers into one big state.
   The result is passed to the Provider in ../src/index.js */
export default combineReducers({
    profiles: profilesReducer,
})
