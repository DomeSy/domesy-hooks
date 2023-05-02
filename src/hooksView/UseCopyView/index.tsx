import { useCopy } from "../../hooks";
import { useState } from "react";
import { Button, Input, message } from "antd";

const Index = () => {
  const [value, setValue] = useState<string>();

  const [copyText, copy] = useCopy();
  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <Input
        style={{ display: "inline-block", width: 240, marginRight: 8 }}
        value={value}
        onChange={(v) => setValue(v.target.value)}
      />
      <Button type="primary" onClick={() => copy(value || "")}>
        复制
      </Button>
      <div>{copyText ? `复制结果: ${copyText}` : ""}</div>
    </>
  );
};

export default Index;
