import request from '../utils/request';

export function login(user) {
  console.log(localStorage.getItem("token"));
  user = JSON.stringify(user);
  let url = 'api/user/login';
  let options = {
    method: 'post',
    body: user,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function register(user) {
  console.log(localStorage.getItem("token"));
  user = JSON.stringify(user);
  let url = 'api/user/register';
  let options = {
    method: 'post',
    body: user,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
