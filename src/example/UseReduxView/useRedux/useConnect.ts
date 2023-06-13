import { useContext, useEffect, useRef } from "react";
import { useUpdate, useCreation } from "../../../hooks";
import ReduxContext from "./createRedux";

const useConnect = (mapStoreToState?: (data: any) => void) => {
  // 获取对应的值
  const contextValue: any = useContext(ReduxContext);
  const { getInitState, dispatch, subscribe, unSubscribe } = contextValue;

  const stateValue = useRef(getInitState(mapStoreToState));
  const update = useUpdate();

  const connectValue = useCreation(() => {
    const state = {
      oldState: stateValue.current,
      mapStoreToState,
      /* 更新函数 */
      update: (newState: any) => {
        state.oldState = newState;
        stateValue.current = newState;
        // 更新
        update();
      },
    };
    return state;
  }, [contextValue]); // 将 contextValue 作为依赖项。

  useEffect(() => {
    const name = subscribe(connectValue);
    return function () {
      unSubscribe(name);
    };
  }, [connectValue]);

  return [stateValue.current, dispatch];
};

export default useConnect;
