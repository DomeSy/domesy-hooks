import { useHover } from "../../hooks";
import { useState, useRef } from "react";

const Index = () => {
  const [flag, setFlag] = useState<boolean>(false);

  const ref = useRef(null);
  useHover(ref, {
    onEnter: () => console.log("enter"),
    onLeave: () => console.log("leave"),
    onChange: (v) => setFlag(v),
  });

  return (
    <>
      <div ref={ref} style={{ padding: 10, border: "1px solid #ccc" }}>
        监听useHover, 一起玩转Hooks吧！
      </div>
      <div>当前状态：{flag ? "enter" : "leave"}</div>
    </>
  );
};

export default Index;
