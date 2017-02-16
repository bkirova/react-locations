import axios from 'axios'

export function fetchCountries (query) {
  return function (dispatch) {
    dispatch({type: 'FETCH_COUNTRIES', payload: []})
    
    var url = 'https://restcountries.eu/rest/v1/all'
    if (query) {
      url = 'https://restcountries.eu/rest/v1/name/'+query
    }

    axios.get(url)
      .then((response) => {
        dispatch({type: 'FETCH_COUNTRIES_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_COUNTRIES_REJECTED', payload: err})
      })
  }
}
