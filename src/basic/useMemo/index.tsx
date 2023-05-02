import { useState, useMemo } from "react";
import { Button } from "antd";

const usePow = (list: number[]) => {
  return useMemo(
    () =>
      list.map((item: number) => {
        console.log(1);
        return Math.pow(item, 2);
      }),
    []
  );
};

const Index: React.FC<any> = () => {
  let [flag, setFlag] = useState(true);

  const data = usePow([1, 2, 3]);

  return (
    <>
      <div>数字集合：{JSON.stringify(data)}</div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        状态切换{JSON.stringify(flag)}
      </Button>
    </>
  );
};

export default Index;
