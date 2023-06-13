import { useConnect } from "../useRedux";
import Father from "./Father";
import Sibling from "./Sibling";
import Clear from "./Clear";

const Index = (props: any) => {
  const [state] = useConnect((data) => ({
    count: data.count,
    msg: data.msg,
  }));

  return (
    <>
      <h3> useRedux 使用示例：</h3>
      <div style={{ marginBottom: 6 }}>公共数据 count： {state.count}</div>
      <div style={{ marginBottom: 6 }}>Child 传递的数据 msg： {state.msg}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Father />
        <Sibling />
      </div>
      <Clear />
    </>
  );
};

export default Index;
