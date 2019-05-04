import { getRoot, getChild } from '../services/PoetryService';

export default {
  namespace: 'poetryCategory',
  state: {
    root: [],
  },
  effects: {
    *getRootList(_, sagaEffects) {
      const { call, put } = sagaEffects;
      const result = yield call(getRoot);
      yield put({ type: 'queryRootList', payload: result.data });
    },
  },
  reducers: {
    queryRootList(state, { payload: data }) {
      return {
        root: data,
      };
    },
  },
};
