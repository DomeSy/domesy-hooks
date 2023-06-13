import { Button } from "antd";
import { useState } from "react";
import { flushSync } from "react-dom";

// flushSync
const Index = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div>count: {count}</div>
      <div>flag: {JSON.stringify(flag)}</div>
      <Button
        type="primary"
        onClick={() => {
          setTimeout(() => {
            flushSync(() => {
              setCount(count + 4);
            });
            flushSync(() => {
              setCount(count + 5);
            });
            flushSync(() => {
              setFlag(!flag);
            });
          });
        }}
      >
        count 加
      </Button>
    </>
  );
};

export default Index;
