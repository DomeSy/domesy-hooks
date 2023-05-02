import { useTextSelection } from "../../hooks";
import Specific from "./Specific";

const Index = () => {
  const { text, height, width, top, left, right, bottom } = useTextSelection();

  return (
    <>
      <div>
        <p style={{ fontWeight: "bold" }}>请随意选取文本</p>
        <p>当前选取的文字为：{text}</p>
        <p>文本的左坐标为：{left}</p>
        <p>文本的右坐标为：{right}</p>
        <p>文本的顶坐标为：{top}</p>
        <p>文本的底坐标为：{bottom}</p>
        <p>文本的宽度：{width}</p>
        <p>文本的高度：{height}</p>
      </div>
      <Specific />
    </>
  );
};

export default Index;
