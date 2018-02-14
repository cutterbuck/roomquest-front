export function authReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    case 'UPDATE_USER_VACANCY':
      return {...state, vacancy: action.vacancy};
    default:
      return state;
  }
}
