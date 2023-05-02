import { useRef } from "react";
import { useInViewport } from "../../hooks";

const Index = () => {
  const ref = useRef(null);
  const [inViewport, ratio] = useInViewport(ref, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: document.getElementById("parent"),
  });

  return (
    <>
      <div
        style={{
          width: 400,
          height: 320,
          marginBottom: 8,
          overflow: "scroll",
          border: "1px solid",
        }}
        id={"parent"}
      >
        <p> 大家好，我是小杜杜，一起玩转Hooks吧！</p>
        <div style={{ height: 700 }}>
          <p
            ref={ref}
            style={{
              border: "1px solid",
              height: 200,
              width: 200,
              textAlign: "center",
              marginTop: 50,
              marginLeft: 20,
            }}
          >
            可视区域
          </p>
        </div>
      </div>
      <div>可视区域: {inViewport ? "展示" : "隐藏"}</div>
      <div>比例： {ratio}</div>
    </>
  );
};

export default Index;
