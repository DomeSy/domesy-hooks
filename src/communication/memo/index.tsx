import { Component, memo } from "react";
import { Button } from "antd";

const Child = ({ number, msg = "" }: any) => {
  return (
    <>
      {console.log(`${msg}子组件渲染`)}
      <p>
        {msg}数字：{number}
      </p>
    </>
  );
};

const HOCChild = memo(Child, (pre, next) => {
  if (pre.number === next.number) return true;
  if (next.number < 7) return false;
  return true;
});

class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      flag: true,
      number: 1,
    };
  }

  render() {
    const { flag, number } = this.state;
    return (
      <div>
        大家好，我是小杜杜，一起玩转Hooks吧！
        <Child number={number} />
        <HOCChild number={number} msg="被memo包的" />
        <Button type="primary" onClick={() => this.setState({ flag: !flag })}>
          状态切换{JSON.stringify(flag)}
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => this.setState({ number: number + 1 })}
        >
          数字加一：{number}
        </Button>
      </div>
    );
  }
}

export default Index;
