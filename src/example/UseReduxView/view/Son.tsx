import { Button } from "antd";
import { useConnect } from "../useRedux";

function setWait(number: number) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, number);
  });
}

const Index = () => {
  const [state, dispatch] = useConnect();

  return (
    <div style={{ padding: 8, margin: 8, border: "1px solid #000" }}>
      <div>我是孙组件：Son</div>
      <div>count: {state.count}</div>
      <div>msg: {state.msg}</div>
      <div style={{ margin: 8 }}>
        <Button
          type="primary"
          onClick={async () => {
            new Promise((resolve: any) => {
              dispatch({ type: "add" });
            });
          }}
        >
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
