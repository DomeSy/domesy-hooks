import { useLockFn } from "../../hooks";
import { useState, useRef } from "react";
import { Button, message } from "antd";

const mockRequest = (count: number) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`执行完成, 当前为：${count + 1}`);
    }, 2000);
  });
};
const Index = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const click = useLockFn(async () => {
    setLoading(true);
    message.success("开始执行");
    const res = await mockRequest(count);
    setLoading(false);
    message.success(res);
    setCount((v) => v + 1);
  });

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <div>数字：{count}</div>
      <Button loading={loading} type="primary" onClick={() => click()}>
        竞态锁: 点击 + 1
      </Button>
    </>
  );
};

export default Index;
