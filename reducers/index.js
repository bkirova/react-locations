import { combineReducers } from "redux"

import countries from "./countriesReducer.js"
import capitals from "./capitalsReducer.js"

export default combineReducers({
	countries,
	capitals
})