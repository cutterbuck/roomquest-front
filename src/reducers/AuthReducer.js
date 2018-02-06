export function authReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      debugger
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
}
