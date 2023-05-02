import { useState } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
  const [number, setNumber] = useState<number>(0);

  return (
    <>
      <div>我是父组件</div>
      <div>子组件的number：{number}</div>

      <Child
        getNumber={(v: number) => {
          setNumber(v);
        }}
      >
        大家好，我是小杜杜，一起玩转Hooks吧！
      </Child>
    </>
  );
};

const Child: React.FC<any> = ({ getNumber }) => {
  const [number, setNumber] = useState<number>(0);

  return (
    <div style={{ border: "1px solid #000", padding: 20 }}>
      <div>我是子组件</div>
      <Button
        type="primary"
        onClick={() => {
          const res = number + 1;
          setNumber(res);
          getNumber(res);
        }}
      >
        点击加一{number}
      </Button>
    </div>
  );
};

export default Index;
