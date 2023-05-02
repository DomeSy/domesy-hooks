import { useState } from "react";
import { useMount, useUnmount } from "../../hooks";

import { Button, message } from "antd";

const Child = () => {
  useMount(() => {
    message.info("首次渲染");
  });

  useUnmount(() => {
    message.info("组件已卸载");
  });

  return <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>;
};

const Index = () => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换 {flag ? "unmount" : "mount"}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
