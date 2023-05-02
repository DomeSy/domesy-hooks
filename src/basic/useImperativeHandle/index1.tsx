import { useState, useRef, useImperativeHandle } from "react";
import { Button } from "antd";

const Child = ({cRef}:any) => {

  const [count, setCount] = useState(0)

  useImperativeHandle(cRef, () => ({
    add
  }))

  const add = () => {
    setCount((v) => v + 1)
  }

  return <div>
    <p>点击次数：{count}</p>
    <Button onClick={() => add()}> 子组件的按钮，点击+1</Button>
  </div>
}

const Index: React.FC<any> = () => {
  const ref = useRef<any>(null)

  return (
    <>
      <div>大家好，我是小杜杜，一起学习hooks吧！</div>
      <div></div>
      <Button
        type="primary"
        onClick={() =>  ref.current.add()}
      >
        父组件上的按钮，点击+1
      </Button>
      <Child cRef={ref} />
    </>
  );
};

export default Index;
