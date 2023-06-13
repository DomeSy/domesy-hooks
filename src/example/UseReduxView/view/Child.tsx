import { Button, Input } from "antd";
import { useState } from "react";
import { useConnect } from "../useRedux";
import Son from "./Son";

const Index = () => {
  const [value, setValue] = useState("大家好，我是小杜杜，一起玩转Hooks吧！");

  const [state, dispatch] = useConnect((data) => ({
    count: data.count,
    flag: data.flag,
  }));

  return (
    <div style={{ padding: 8, border: "1px solid #000" }}>
      <div>我是子组件：Child</div>
      <div>count: {state.count}</div>
      <div style={{ paddingTop: 6 }}>
        通过 Input 改变 store 中的 msg 数据:
        <div style={{ display: "flex", marginTop: 6 }}>
          <Input value={value} onChange={(v) => setValue(v.target.value)} />
          <Button
            type="primary"
            onClick={() => dispatch({ type: "set", value })}
            style={{ marginLeft: 8 }}
          >
            传递
          </Button>
        </div>
      </div>
      {state.flag && <Son />}
    </div>
  );
};

export default Index;
