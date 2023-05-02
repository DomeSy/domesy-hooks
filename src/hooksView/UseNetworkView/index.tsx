import { useNetwork } from "../../hooks";

const Index = () => {
  const net = useNetwork();

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <div>当前网络状态：</div>
      <div>网络是否为在线: {net?.online ? "是" : "否"}</div>
      <div>当前连接下评估的往返时延: {net?.rtt || 0}</div>
      <div>设备使用与所述网络进行通信的连接的类型: {net?.type || "无"}</div>
      <div>
        用户代理是否设置了减少数据使用的选项: {net?.saveData ? "是" : "否"}
      </div>
      <div>最大下行速度（单位：兆比特/秒）: {net?.downlinkMax || 0}</div>
      <div>网络连接的类型: {net?.effectiveType || "无"}</div>
    </>
  );
};

export default Index;
