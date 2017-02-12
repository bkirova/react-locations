export default function reducer(state={
    country: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_COUNTRY": {
        return {...state, fetching: true}
      }
      case "FETCH_COUNTRY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_COUNTRY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          country: action.payload,
        }
      }
    }

    return state
}