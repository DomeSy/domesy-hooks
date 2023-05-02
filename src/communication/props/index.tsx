import { useState } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
  const [flag, setFlag] = useState<boolean>(true);

  return (
    <>
      <div>我是父组件</div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换状态
      </Button>
      <Child flag={flag}>大家好，我是小杜杜，一起玩转Hooks吧！</Child>
    </>
  );
};

const Child: React.FC<any> = (props) => {
  const { flag, children } = props;
  return (
    <div style={{ border: "1px solid #000", padding: 20 }}>
      <div>我是子组件</div>
      <div>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div>父组件传递的children：{children}</div>
    </div>
  );
};

export default Index;
