import { useInsertionEffect } from "react";

const Index = () => {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .css-in-js{
        color: blue;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div>
      <div className="css-in-js">大家好，我是小杜杜，一起玩转Hooks吧！</div>
    </div>
  );
};

export default Index;
