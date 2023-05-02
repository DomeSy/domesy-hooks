import { useState, useEffect } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count改变才会执行");
  }, [count]);

  return (
    <>
      <div>
        number: {number} count: {count}
      </div>
      <Button type="primary" onClick={() => setNumber((v) => v + 1)}>
        number + 1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => setCount((v) => v + 1)}
      >
        count + 1
      </Button>
    </>
  );
};

export default Index;
