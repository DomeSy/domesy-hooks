import { connect } from "react-redux";
import { Button, Input } from "antd";
import { useState } from "react";
import Son from "./Son";

const Index = ({ count, flag, dispatch }: any) => {
  const [value, setValue] = useState("大家好，我是小杜杜，一起玩转Hooks吧！");

  return (
    <div style={{ padding: 8, border: "1px solid #000" }}>
      <div>我是子组件：Child</div>
      <div>count: {count}</div>
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
      {flag && <Son />}
    </div>
  );
};

export default connect((state) => state)(Index);
