import { connect } from "react-redux";
import { Button } from "antd";

const Index = ({ count, msg, dispatch }: any) => {
  return (
    <div style={{ width: "48%", padding: 8, border: "1px solid #000" }}>
      <div>我是兄弟组件： Slibling</div>
      <div>count: {count}</div>
      <div>msg: {msg}</div>
      <div style={{ margin: 8 }}>
        <Button type="primary" onClick={() => dispatch({ type: "add" })}>
          count+1
        </Button>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => dispatch({ type: "sub" })}
        >
          count-1
        </Button>
      </div>
    </div>
  );
};

export default connect((state) => state)(Index);
