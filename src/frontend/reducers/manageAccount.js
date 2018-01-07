export const manageAccount = (state = { isSignedIn: false, user: null }, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        return Object.assign({}, state, { isSignedIn: true, user:action.payload.user });
    case 'SIGN_OUT':
        localStorage.signedIn = false;
        localStorage.uid = null;

        return Object.assign({}, state, { isSignedIn: false, user:null });
    default:
      return state;
  }
}
