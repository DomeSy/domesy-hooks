import { useState, useEffect, useLayoutEffect } from "react";

const Index: React.FC<any> = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  useEffect(() => {
    if(count === 0){
      setCount(10 + Math.random() * 100)
    }
  }, [count])

  useLayoutEffect(() => {
    if(count1 === 0){
      setCount1(10 + Math.random() * 100)
    }
  }, [count1])

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <div>useEffect的count:{count}</div>
      <div>useLayoutEffect的count:{count1}</div>
    </>
  );
};

export default Index;
