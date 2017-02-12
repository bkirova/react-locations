import axios from "axios";

export function fetchCountry(query) {
  return function(dispatch) {
    axios.get("https://restcountries.eu/rest/v1/name/"+query)
      .then((response) => {
        dispatch({type: "FETCH_COUNTRY_FULFILLED", payload: response.data[0]})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COUNTRY_REJECTED", payload: err})
      })
  }
}