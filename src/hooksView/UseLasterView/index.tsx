import { useState, useEffect } from "react";
import { useLatest } from "../../hooks";

export default () => {
  const [count, setCount] = useState(0);

  const ref = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("count:", count);
      console.log("ref:", ref);
      setCount(ref.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>自定义Hooks：useLatestt</div>
      <div>count计数器: {count}</div>
    </>
  );
};
