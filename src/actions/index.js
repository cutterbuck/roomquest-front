const API_ROOT = 'http://localhost:3001/api/v1';

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
};

export function fetchUser() {
  return (dispatch) => {
    const token = localStorage.getItem("token")
    return fetch(`${API_ROOT}/current_user`, {
      headers: {'Authorization': token}
    }).then(resp => resp.json())
    .then(user => {
      dispatch({ type: 'LOGIN_USER', payload: user })
    })
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
      localStorage.setItem("token", user.code)
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
       currentPosition: {lat: position.coords.latitude, lng: position.coords.longitude}
     })
    })
  }
}

export function getVacancyGeoLocation(address) {
  return (dispatch) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE}`)
    .then(resp => resp.json())
  }
}

export function postVacancy(data) {
  return (dispatch) => {
    return fetch(`${API_ROOT}/vacancies`, {
      method: 'POST',
      headers,
      body: JSON.stringify({data})
    }).then(resp => resp.json())
    .then(json => {
      const {address, apt_num, city, description, id} = json
      const vacancy = {address, apt_num, city, description, id}
      dispatch({ type: 'UPDATE_USER_VACANCY', vacancy })
    })
  }
}

export function deleteVacancy(id) {
  return (dispatch) => {
    return fetch(`${API_ROOT}/vacancies/${id}`, {
      method: 'DELETE',
      headers: headers
    })
  }
}
