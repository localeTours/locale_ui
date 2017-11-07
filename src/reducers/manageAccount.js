export const manageAccount = (state = { signedIn: false }, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        return Object.assign({}, state, { signedIn: true });
    default:
      return state;
  }
}
