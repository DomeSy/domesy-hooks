import { useRef } from "react";
import { useTextSelection } from "../../hooks";

const Index = () => {
  const ref = useRef(null);
  const selection = useTextSelection(ref);

  return (
    <>
      <p style={{ fontWeight: "bold" }}>只能选择框中的文字</p>
      <div
        ref={ref}
        style={{ border: "1px solid", padding: 10, marginBottom: 4 }}
      >
        <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      </div>
      <div>选中的数据：{JSON.stringify(selection)}</div>
    </>
  );
};

export default Index;
