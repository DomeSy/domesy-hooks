import { connect } from "react-redux";
import { Button } from "antd";

const Index = ({ count, dispatch }: any) => {
  return (
    <div style={{ padding: 8, marginTop: 10, border: "1px solid #000" }}>
      <div>我是清除组件：Clear</div>
      <div>count: {count}</div>
      <Button
        style={{ marginLeft: 8 }}
        onClick={() => dispatch({ type: "clear" })}
      >
        清除
      </Button>
      <Button
        style={{ marginLeft: 8 }}
        type="primary"
        onClick={() => dispatch({ type: "flag" })}
      >
        切换孙组件的展示状态
      </Button>
    </div>
  );
};

export default connect((state) => state)(Index);
