import { connect } from "react-redux";
import Father from "./Father";
import Sibling from "./Sibling";
import Clear from "./Clear";

const Index = (props: any) => {
  return (
    <>
      <h3>react-redux 使用示例：</h3>
      <div style={{ marginBottom: 6 }}>公共数据 count： {props.count}</div>
      <div style={{ marginBottom: 6 }}>Child 传递的数据 msg： {props.msg}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Father />
        <Sibling />
      </div>
      <Clear />
    </>
  );
};

export default connect((state: any) => ({
  count: state.count,
  msg: state.msg,
}))(Index);
