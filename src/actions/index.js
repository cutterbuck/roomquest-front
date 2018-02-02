const API_ROOT = 'http://localhost:3001/api/v1';

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
};


export function loginUser(response, history) {
  return (dispatch) => {
    return fetch(`${API_ROOT}/home`, {
      method: 'POST',
      headers,
      body: JSON.stringify({response})
    }).then(resp => resp.json())
    .then(user => {
      localStorage.setItem("jwt", user.code)
      dispatch({ type: 'LOGIN_USER', payload: user.currentUser })
      history.push("/home")
    })
  }
}

export function logoutUser() {
  return (dispatch) => {
    localStorage.clear();
  }
}
