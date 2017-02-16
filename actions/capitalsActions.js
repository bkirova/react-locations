import axios from 'axios'

export function fetchCapitals(query) {
  return function(dispatch) {
    dispatch({type: 'FETCH_CAPITALS', payload: []})
    
    if(query) {    
	    axios.get('https://restcountries.eu/rest/v1/capital/'+query)
	      .then((response) => {
	        dispatch({type: 'FETCH_CAPITALS_FULFILLED', payload: response.data})
	      })
	      .catch((err) => {
	        dispatch({type: 'FETCH_CAPITALS_REJECTED', payload: err})
	      })
    }

  }
}