import { useConnect } from "../useRedux";
import { Button } from "antd";
import Child from "./Child";

const Index = ({ count, msg, onAdd, onSub, ...props }: any) => {
  const [state, dispatch] = useConnect();

  return (
    <div style={{ width: "48%", padding: 8, border: "1px solid #000" }}>
      <div>我是父组件：Father</div>
      <div>count: {state.count}</div>
      <div>msg: {state.msg}</div>
      <div style={{ margin: 8 }}>
        <Button type="primary" onClick={() => dispatch({ type: "add" })}>
          count+1
        </Button>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => dispatch({ type: "sub" })}
        >
          count-1
        </Button>
      </div>
      <Child />
    </div>
  );
};

export default Index;
