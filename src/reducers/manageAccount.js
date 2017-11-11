export const manageAccount = (state = { isSignedIn: false }, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        return Object.assign({}, state, { isSignedIn: true });
    default:
      return state;
  }
}
