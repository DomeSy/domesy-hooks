import { useState, useTransition, startTransition } from "react";
import { Input } from "antd";
import { count } from "./utils";

const Index: React.FC<any> = () => {
  // const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          startTransition(() => {
            const res: string[] = [];
            for (let i = 0; i < count; i++) {
              res.push(e.target.value);
            }
            setList(res);
          });
        }}
      />
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default Index;
