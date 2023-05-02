import { useState, useRef } from "react";

const Index: React.FC<any> = () => {
  const scrollRef = useRef<any>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const onScroll = () => {
    if (scrollRef?.current) {
      let clientHeight = scrollRef?.current.clientHeight; //可视区域高度
      let scrollTop = scrollRef?.current.scrollTop; //滚动条滚动高度
      let scrollHeight = scrollRef?.current.scrollHeight; //滚动内容高度
      setClientHeight(clientHeight);
      setScrollTop(scrollTop);
      setScrollHeight(scrollHeight);
    }
  };

  return (
    <>
      <div>
        <p>可视区域高度：{clientHeight}</p>
        <p>滚动条滚动高度：{scrollTop}</p>
        <p>滚动内容高度：{scrollHeight}</p>
      </div>
      <div
        style={{ height: 200, border: "1px solid #000", overflowY: "auto" }}
        ref={scrollRef}
        onScroll={onScroll}
      >
        <div style={{ height: 2000 }}></div>
      </div>
    </>
  );
};

export default Index;
