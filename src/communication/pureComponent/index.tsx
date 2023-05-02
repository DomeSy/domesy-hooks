import { PureComponent } from "react";
import { Button } from "antd";

class Index extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        number: 0,
      },
    };
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
        <div> 数字： {data.number}</div>
        <Button
          type="primary"
          onClick={() => {
            const { data } = this.state;
            data.number++;
            // 正确写法
            // this.setState({ data: {...data} })
            this.setState({ data });
          }}
        >
          数字加1
        </Button>
      </>
    );
  }
}

export default Index;
