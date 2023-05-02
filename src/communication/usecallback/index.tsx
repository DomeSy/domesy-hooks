import { useState, useCallback, memo } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(0);
  let [flag, setFlag] = useState(true);

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div>数字number：{number}</div>
      <div>数字count：{count}</div>
      <TestButton onClick={() => setNumber((v) => v + 1)}>普通点击</TestButton>
      <TestButton onClick={add}>useCallback点击</TestButton>
      <Button
        style={{ marginLeft: 10 }}
        type="primary"
        onClick={() => setFlag((v) => !v)}
      >
        切换{JSON.stringify(flag)}
      </Button>
    </>
  );
};

const TestButton = memo(({ children, onClick = () => {} }: any) => {
  console.log(children);
  return (
    <Button
      type="primary"
      onClick={onClick}
      style={children === "useCallback点击" ? { marginLeft: 10 } : undefined}
    >
      {children}
    </Button>
  );
});

export default Index;
