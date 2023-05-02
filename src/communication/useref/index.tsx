import { useRef, useEffect, Component, forwardRef } from "react";
import ReactDOM from "react-dom";
class Son extends Component {
  render() {
    return <div>我是孙组件</div>;
  }
}

class Child extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  div: any = null;
  son: any = null;
  componentDidMount() {
    this.props.forwardRef.current = {
      div: this.div, // 子组件的div
      child: this, // 子组件的实例
      son: this.son, // 孙组件的实例
    };
  }

  render() {
    return (
      <>
        <div ref={(node) => (this.div = node)}>我是子组件</div>
        <Son ref={(node) => (this.son = node)} />
      </>
    );
  }
}

const ForwardChild = forwardRef((props, ref) => (
  <Child {...props} forwardRef={ref} />
));

const Index = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ReactDOM, "--");
    console.log(ref.current);
  }, []);

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <ForwardChild ref={ref} />
    </>
  );
};

export default Index;
