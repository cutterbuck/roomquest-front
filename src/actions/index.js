const API_ROOT = 'http://localhost:3001/api/v1';

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
};

export function fetchUser(token) {
  return (dispatch) => {
    return fetch(`${API_ROOT}/current_user`, {
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': token
      }
    }).then(resp => resp.json())
    // .then(user => {
    //   debugger
    //   console.log('this is user in fetchUSEr', user)
    //   dispatch({ type: 'LOGIN_USER', payload: user })
    // })
  }
}


export function loginUser(response, history) {
  return (dispatch) => {
    return fetch(`${API_ROOT}/home`, {
      method: 'POST',
      headers,
      body: JSON.stringify({response})
    }).then(resp => resp.json())
    .then(user => {
      debugger  //id is correct now
      // console.log('this is user in LOGINUSER', user)
      localStorage.setItem("token", user.code)
      debugger
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

export function getLocation() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(position => {
      dispatch({
       type: 'SET_CURRENT_POSITION',
       currentPosition: {lat: position.coords.latitude, long: position.coords.longitude}
     })
    })
  }
}

export function postVacancy(data) {
  return (dispatch) => {
    return fetch(`${API_ROOT}/vacancies`, {
      method: 'POST',
      headers,
      body: JSON.stringify({data})
    })
  }
}
