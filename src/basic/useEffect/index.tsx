import { useState, useEffect } from "react";
import { Button } from "antd";

const Child: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("大家好，我是小杜杜，一起学习hooks吧！");
  });

  return (
    <>
      <Button type="primary" onClick={() => setCount((v) => v + 1)}>
        数字加一：{count}
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => setFlag((v) => !v)}
      >
        状态切换：{JSON.stringify(flag)}
      </Button>
    </>
  );
};

const Index: React.FC<any> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setCount((v) => v + 1);
        }}
      >
        数据加{count}
      </Button>
      <div>123</div>
      <Child />
    </div>
  );
};

export default Index;
