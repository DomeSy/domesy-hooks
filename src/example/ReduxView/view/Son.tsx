import { connect } from "react-redux";
import { Button } from "antd";

const Index = ({ count, msg, dispatch }: any) => {
  return (
    <div style={{ padding: 8, margin: 8, border: "1px solid #000" }}>
      <div>我是孙组件：Son</div>
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

// 第一个用于传递 props， 第二个参数用于传递 action
export default connect((state) => state)(Index);
