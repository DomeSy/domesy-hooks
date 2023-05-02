import { useState } from "react";
import { Button, message } from "antd";
import { useTrackedEffect } from "../../hooks";

const Index = () => {
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);

  useTrackedEffect(
    (changes, previousDeps, currentDeps, type_changes) => {
      console.log("改变deps的索引数组:", changes);
      console.log("上一次改变的值", previousDeps);
      console.log("下一次改变的的值", currentDeps);
      console.log("改变deps对应的string数组", type_changes);

      if ((changes || []).includes(0) && (changes || []).includes(1)) {
        message.info("count, count1 都改变了");
      } else if ((changes || []).includes(0)) {
        message.info("count 改变了");
      } else if ((changes || []).includes(1)) {
        message.info("count1 改变了");
      }
    },
    [count, count1],
    ["count", "count1"]
  );

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <div>数字: {count}</div>
      <div>数字1: {count1}</div>
      <Button type="primary" onClick={() => setCount((v) => v + 1)}>
        count + 1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 8 }}
        onClick={() => setCount1((v) => v + 1)}
      >
        count1 + 1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 8 }}
        onClick={() => {
          setCount((v) => v + 1);
          setCount1((v) => v + 1);
        }}
      >
        count 和 count1 + 1
      </Button>
    </>
  );
};

export default Index;
