export default function reducer (state = {
  capitals: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_CAPITALS': {
      return {...state, fetching: true}
    }
    case 'FETCH_CAPITALS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_CAPITALS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        capitals: action.payload
      }
    }
  }

  return state
}
