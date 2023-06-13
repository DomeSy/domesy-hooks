import React from "react";
import { Provider } from "react-redux";
import View from "./view";
import { createStore } from "redux";
import reducers from "./reducers";

// 生成对应的store
const store = createStore(reducers);

const Index = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

export default Index;
