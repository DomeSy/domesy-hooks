import { connect } from "react-redux";
import { Button } from "antd";
import Child from "./Child";

const Index = ({ count, msg, onAdd, onSub }: any) => {
  return (
    <div style={{ width: "48%", padding: 8, border: "1px solid #000" }}>
      <div>我是父组件：Father</div>
      <div>count: {count}</div>
      <div>msg: {msg}</div>
      <div style={{ margin: 8 }}>
        <Button type="primary" onClick={() => onAdd()}>
          count+1
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => onSub()}>
          count-1
        </Button>
      </div>
      <Child />
    </div>
  );
};

// 第一个用于传递 props， 第二个参数用于传递 action, 如果 第二个参数不传，会把 dispatch 当作 props 传递过去
export default connect(
  (state: any) => ({ count: state.count, msg: state.msg }),
  (dispatch: any) => {
    return {
      onAdd: () => dispatch({ type: "add" }),
      onSub: () => dispatch({ type: "sub" }),
    };
  }
)(Index);
