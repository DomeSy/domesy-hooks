import { useState, useDeferredValue } from "react";
import { Input } from "antd";

const getList = (key: any) => {
  const arr = [];
  for (let i = 0; i < 20000; i++) {
    if (String(i).includes(key)) {
      arr.push(<li key={i}>{i}</li>);
    }
  }
  return arr;
};

const Index: React.FC<any> = () => {
  const [input, setInput] = useState("");
  const deferredValue = useDeferredValue(input);

  return (
    <>
      <div>寻找2w以内匹配的数据：</div>
      <Input value={input} onChange={(e: any) => setInput(e.target.value)} />
      <div>
        <ul>{deferredValue ? getList(deferredValue) : null}</ul>
      </div>
    </>
  );
};

export default Index;
