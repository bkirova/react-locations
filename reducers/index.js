import { combineReducers } from "redux"

import countries from "./countriesReducer.js"
import country from "./countryReducer.js"


export default combineReducers({
	countries,
	country
})