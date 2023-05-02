import { useFullscreen } from "../../hooks";
import { useRef } from "react";
import { Button } from "antd";
import Img from "./img.png";

const Index = () => {
  const ref = useRef(null);
  const refImg = useRef(null);

  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen(ref, {
    onEnter: () => console.log("进入全屏"),
    onExit: () => console.log("退出全屏"),
  });
  const { enterFullscreen: enterFullscreenImg } = useFullscreen(refImg);

  return (
    <>
      <div ref={ref} style={{ background: "#fff", padding: 10 }}>
        <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
        <div>是否全屏：{isFullscreen ? "是" : "否"}</div>
        <Button type={"primary"} onClick={enterFullscreen}>
          进入全屏
        </Button>
        <Button onClick={exitFullscreen} style={{ marginLeft: 8 }}>
          退出全屏
        </Button>
      </div>
      <div>
        <div>图片进入全屏：</div>
        <img
          ref={refImg}
          id="img"
          src={Img}
          style={{ width: 400, height: 240 }}
        />
        <div>
          <Button type={"primary"} onClick={enterFullscreenImg}>
            图片进入全屏
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
