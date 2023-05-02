import { useState, useRef, useImperativeHandle, Component, forwardRef } from "react";
import { Button } from "antd";

const Child = (props:any, ref:any) => {

  const [count, setCount] = useState(0)

  useImperativeHandle(ref, () => ({
    add
  }))

  const add = () => {
    setCount((v) => v + 1)
  }

  return <div>
    <p>点击次数：{count}</p>
    <Button onClick={() => add()}> 子组件的按钮，点击+1</Button>
  </div>
}

const ForwardChild = forwardRef(Child)

class Index extends Component{
  countRef:any = null
  render(){
    return   <>
      <div>大家好，我是小杜杜，一起学习hooks吧！</div>
      <div></div>
      <Button
        type="primary"
        onClick={() => this.countRef.add()}
      >
        父组件上的按钮，点击+1
      </Button>
      <ForwardChild ref={node => this.countRef = node} />
    </>
  }
}

export default Index;
