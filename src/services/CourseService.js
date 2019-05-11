import request from '../utils/request';

export function getAllCourseList() {
  let url = 'api/course/listAll';
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getCourseDetailById(courseId) {
  let url = 'api/course/detail?id='+ courseId;
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function courseCollection(userInfo) {
  userInfo = JSON.stringify(userInfo);
  let url = 'api/course/collection';
  let options = {
    method: 'post',
    body: userInfo,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function getAllCollectedCourse(name) {
  let url = 'api/course/collected?userName='+name;
  let options = {
    method: 'get',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function deleteCollectedCourse(userAndCourse) {
  userAndCourse = JSON.stringify(userAndCourse);
  let url = 'api/course/deleteCollected';
  let options = {
    method: 'post',
    body: userAndCourse,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
export function commitStar(userCourseStar) {
  userCourseStar = JSON.stringify(userCourseStar);
  let url = 'api/course/commitStar';
  let options = {
    method: 'post',
    body: userCourseStar,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  };
  return request(url, options);
}
