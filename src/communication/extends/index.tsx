import React from "react";
import { Button } from "antd";

class Child extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      msg: "大家好，我是小杜杜，一起玩转Hooks吧！",
    };
  }

  speak() {
    console.log("Child中的speack");
  }

  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        <Button type="primary" onClick={() => this.speak()}>
          查看控制台
        </Button>
      </>
    );
  }
}

class Index extends Child {
  speak() {
    console.log("extends 模式，强化后会替代Child的speak方法");
  }
}

export default Index;
