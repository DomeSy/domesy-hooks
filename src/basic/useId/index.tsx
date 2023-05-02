import { useId } from "react";

const Index: React.FC<any> = () => {
  const id = useId();

  return <div id={id}>大家好，我是小杜杜，一起玩转Hooks吧！</div>;
};

export default Index;
