import { useState, useDeferredValue } from "react";
import { Input } from "antd";

const getList = (key: any) => {
  const arr = [];
  for (let i = 0; i < 10000; i++) {
    if (String(i).includes(key)) {
      arr.push(<li key={i}>{i}</li>);
    }
  }
  return arr;
};

const Index: React.FC<any> = () => {
  //订阅
  const [input, setInput] = useState("");
  const deferredValue = useDeferredValue(input);
  console.log("value：", input);
  console.log("deferredValue：", deferredValue);

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <Input value={input} onChange={(e: any) => setInput(e.target.value)} />
      <div>
        <ul>{deferredValue ? getList(deferredValue) : null}</ul>
      </div>
    </>
  );
};

export default Index;
