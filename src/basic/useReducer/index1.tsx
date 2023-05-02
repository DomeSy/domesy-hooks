import { useReducer } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
  const [count, dispatch] = useReducer((state: number, action: any) => {
    switch (action?.type) {
      case "add":
        return state + action?.payload;
      case "sub":
        return state - action?.payload;
      default:
        return state;
    }
  }, 0);

  return (
    <>
      <div>count：{count}</div>
      <Button
        type="primary"
        onClick={() => dispatch({ type: "add", payload: 1 })}
      >
        加1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => dispatch({ type: "sub", payload: 1 })}
      >
        减1
      </Button>
    </>
  );
};

export default Index;
