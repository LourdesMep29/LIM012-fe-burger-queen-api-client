export const postAuth = (user) => {
  return fetch('http://localhost:8000/auth', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 400){
      return Promise.reject(console.log('email and password is required'));
    }
  });
};

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8000/users/${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then((resp) => {
    if (resp.status === 200) {
    return resp.json(); 
    } if (resp.status === 400){
      return Promise.reject({ message: 'Usuario no encontrado' });
    }
  });
};
