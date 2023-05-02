import { useState } from "react";
import { Input } from "antd";
import debounce from "lodash/debounce";
import { count } from "./utils";

// 防抖
const Index: React.FC<any> = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <Input
        onChange={debounce((e) => {
          const res: string[] = [];
          for (let i = 0; i < count; i++) {
            res.push(e.target.value);
          }
          setList(res);
        }, 300)}
      />
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default Index;
