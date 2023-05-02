import { useState } from "react";
import { Input } from "antd";
import { count } from "./utils";

// 节流
const Index: React.FC<any> = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <Input
        onChange={(e) => {
          setTimeout(() => {
            const res: string[] = [];
            for (let i = 0; i < count; i++) {
              res.push(e.target.value);
            }
            setList(res);
          }, 500);
        }}
      />
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default Index;
