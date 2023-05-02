import { useState } from "react";
import { Input, Tabs } from "antd";
import throttle from "lodash/throttle";
import NormalView from "./normal";
import TimeoutView from "./timeout";
import DebounceView from "./debounce";
import ThrottleView from "./throttle";
import UseTransitionView from "./useTransitionView";
import StartTransitionView from "./startTransition";
import UseDeferredValueView from "./useDeferredValueView";

// 节流
const Index: React.FC<any> = () => {
  const items: any[] = [
    {
      key: "1",
      label: `正常模式`,
      children: <NormalView />,
    },
    {
      key: "2",
      label: `定时器`,
      children: <TimeoutView />,
    },
    {
      key: "3",
      label: `防抖`,
      children: <DebounceView />,
    },
    {
      key: "4",
      label: `节流`,
      children: <ThrottleView />,
    },
    {
      key: "5",
      label: `useTransition`,
      children: <UseTransitionView />,
    },
    {
      key: "6",
      label: `startTransition`,
      children: <StartTransitionView />,
    },
    {
      key: "7",
      label: `useDeferredValue 对值的维护`,
      children: <UseDeferredValueView />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Index;
