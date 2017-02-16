export default function reducer(state={
    countries: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case 'FETCH_COUNTRIES': {
        return {...state, fetching: true}
      }
      case 'FETCH_COUNTRIES_REJECTED': {
        return {...state, fetching: false, error: action.payload}
      }
      case 'FETCH_COUNTRIES_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          countries: action.payload,
        }
      }
    }

    return state
}
