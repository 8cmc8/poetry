import request from '../utils/request';

export function getRoot() {
  let url = 'api/category/root';
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getChild(rootName) {
  let url = 'api/category/child?rootCategoryName=' + rootName ;
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getRootAndChild() {
  let url = 'api/category/rootAndChild';
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getAllSimpleList() {
  let url = 'api/poetry/simpleListAll';
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getAllSimpleListByName(name) {
  let url = 'api/poetry/simpleListByName?name='+name;
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getDetailById(id) {
  let url = 'api/poetry/detail?id='+id;
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
