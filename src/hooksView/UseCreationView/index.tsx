import React, { useState } from "react";
import { Button } from "antd";
import { useCreation } from "../../hooks";

const Index: React.FC<any> = () => {
  const [flag, setFlag] = useState<boolean>(false);

  const getNowData = () => {
    return Math.random();
  };

  const nowData = useCreation(() => getNowData(), []);

  return (
    <>
      <div>正常的函数： {getNowData()}</div>
      <div>useCreation包裹后的： {nowData}</div>
      <Button
        type="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        切换状态{JSON.stringify(flag)}
      </Button>
    </>
  );
};

export default Index;
