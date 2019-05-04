import { getChild } from '../services/PoetryService';

export default {
  namespace: 'poetryCategoryChild',
  state: {
    child: [],
    name:''
  },
  effects: {
    *getChildList(param, sagaEffects) {
      const { call, put } = sagaEffects;
      const result = yield call(getChild,param.payload);
      yield put({ type: 'queryChildList', payload: result.data});
    },
  },
  reducers: {
    queryChildList(state, { payload: data }) {
      return {
        child: data,
      };
    },
  },
};
