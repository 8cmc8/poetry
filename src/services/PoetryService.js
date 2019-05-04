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
