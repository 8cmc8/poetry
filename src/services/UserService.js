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

export function collection(userInfo) {
  userInfo = JSON.stringify(userInfo);
  let url = 'api/user/collection/poetry';
  let options = {
    method: 'post',
    body: userInfo,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getUserInfo(name) {
  let url = 'api/user/basicInfo?userName='+name;
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function updateUser(user) {
  user = JSON.stringify(user);
  let url = 'api/user/update';
  let options = {
    method: 'post',
    body: user,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getAllCollectedPoetry(name) {
  let url = 'api/user/collected?userName='+name;
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function deleteCollectedPoetry(userAndPoetry) {
  userAndPoetry = JSON.stringify(userAndPoetry);
  let url = 'api/user/deleteCollected';
  let options = {
    method: 'post',
    body: userAndPoetry,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}

