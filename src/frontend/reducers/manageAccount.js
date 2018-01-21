export const manageAccount = (state = { isSignedIn: false, user: null, tours: [] }, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        return Object.assign({}, state, { isSignedIn: true, user:action.payload });
    case 'SIGN_OUT':
        localStorage.signedIn = false;
        localStorage.uid = null;
        return Object.assign({}, state, { isSignedIn: false, user:null });
    case 'GET_TOURS':
        return Object.assign({}, state, { tours: action.payload })
    case 'ADD_TOUR':
        var updatedTours = [...state.tours, action.payload]
        return Object.assign({}, state, { tours: updatedTours })
    default:
      return state;
  }
}
