import { useState, useEffect } from "react";
import { Button } from "antd";

const Child = () => {
  useEffect(() => {
    console.log("挂载");

    return () => {
      console.log("卸载");
    };
  }, []);

  return <div>大家好，我是小杜杜，一起学习hooks吧！</div>;
};

const Index: React.FC<any> = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        {flag ? "卸载" : "挂载"}
      </Button>
      {flag && <Child />}
    </>
  );
};

export default Index;
