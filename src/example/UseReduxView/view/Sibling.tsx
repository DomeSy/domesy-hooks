import { Button } from "antd";
import { useConnect } from "../useRedux";

const Index = () => {
  const [state, dispatch] = useConnect();

  return (
    <div style={{ width: "48%", padding: 8, border: "1px solid #000" }}>
      <div>我是兄弟组件： Slibling</div>
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
    </div>
  );
};

export default Index;
