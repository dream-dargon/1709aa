const initialState = {
  userData:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'SET_LOGIN':
      return { ...state, userData: {...payload} }

    default:
      return state
  }
}
