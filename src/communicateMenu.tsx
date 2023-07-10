import {
  PropsView,
  CallbackView,
  ContextView,
  ExtendsView,
  HocView,
} from "./communication";
import type { TabsProps } from "antd";

const Index: TabsProps["items"] = [
  {
    key: "1",
    label: `父传子`,
    children: <PropsView />,
  },
  {
    key: "2",
    label: `子传父`,
    children: <CallbackView />,
  },
  {
    key: "3",
    label: `context 方式`,
    children: <ContextView />,
  },
  {
    key: "4",
    label: `extends 继承模式`,
    children: <ExtendsView />,
  },
  {
    key: "5",
    label: `高阶组件（HOC）模式`,
    children: <HocView />,
  },
];

export default Index;
