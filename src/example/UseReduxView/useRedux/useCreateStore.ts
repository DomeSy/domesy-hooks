import { useRef } from "react";
import shallowEqual from "./shallowEqual";

import { unstable_batchedUpdates } from "react-dom";

// 对标 createStore
// reducer
// initState 初始值
const useCreateStore = (reducer: any, initState: any) => {
  let store = useRef<any>(null);

  if (!store.current) {
    store.current = new ReduxHooksStore(reducer, initState);
  }

  return store.current;
};

class ReduxHooksStore {
  reducer: any;
  state: any;
  id: number;
  components_connect: any;

  constructor(reducer: any, initState: any) {
    this.reducer = reducer;
    this.state = initState;
    this.id = 0;
    this.components_connect = {};
  }

  // 初始化方法
  getInitState = (mapStoreToState?: (data: any) => void) => {
    // 两种模式 mapStoreToState 存在，则返回对应的数据 否则返回全量的数据
    return mapStoreToState ? mapStoreToState(this.state) : this.state;
  };

  // 触发更新state
  dispatch = (action: any) => {
    this.state = this.reducer(this.state, action);
    // unstable_batchedUpdates : v18 和 v17 批量更新有所差异，这点要切记，v18会自动处理批处理逻辑，v17不会，v17要想支持，需要使用unstable_batchedUpdates，
    // 这是之前没有自动批处理之前，一些类库中用于强制进行批处理合并的 API，之后可能做废弃处理，但是目前仍可以使用。

    // unstable_batchedUpdates(() => {

    /* 批量更新 */
    Object.keys(this.components_connect).forEach((name) => {
      const { update, oldState, mapStoreToState } =
        this.components_connect[name];
      const newState = mapStoreToState
        ? mapStoreToState(this.state)
        : this.state;

      // 如果不一致，则触发更新函数
      if (!shallowEqual(oldState, newState)) update(newState);
    });
  };

  // 注册
  subscribe = (connectCurrent: any) => {
    const connectName = `domesy_redux_` + ++this.id;
    this.components_connect[connectName] = connectCurrent;
    return connectName;
  };

  // 卸载
  unSubscribe = (connectName: any) => {
    delete this.components_connect[connectName];
  };
}

export default useCreateStore;
