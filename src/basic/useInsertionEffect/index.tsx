import { useEffect, useLayoutEffect, useInsertionEffect } from "react";

const Index: React.FC<any> = () => {
  useEffect(() => console.log("useEffect"), []);

  useLayoutEffect(() => console.log("useLayoutEffect"), []);

  useInsertionEffect(() => console.log("useInsertionEffect"), []);

  return <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>;
};

export default Index;
