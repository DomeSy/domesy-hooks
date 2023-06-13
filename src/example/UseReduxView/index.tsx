import View from "./view";
import reducers, { initialState } from "../ReduxView/reducers";

import { useCreateStore, ReduxContext } from "./useRedux";

const Index = () => {
  const store = useCreateStore(reducers, initialState);

  return (
    <ReduxContext.Provider value={store}>
      <View />
    </ReduxContext.Provider>
  );
};

export default Index;
