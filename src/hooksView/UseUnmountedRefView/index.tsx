import { useState } from "react";
import { useUnmountedRef, useUnmount, useMount } from "../../hooks";
import { Button } from "antd";

const Child = () => {
  const unmountedRef = useUnmountedRef();

  useMount(() => {
    console.log("初始化：", unmountedRef);
  });
  useUnmount(() => {
    console.log("卸载：", unmountedRef);
  });

  return <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>;
};

const Index = () => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换 {flag ? "卸载" : "初始化"}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
