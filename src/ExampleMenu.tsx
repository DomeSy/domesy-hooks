import {
  ReduxView,
  UseReduxView,
  BatchedUpdatesView,
  AntDForm,
  Form,
  CheckCardView,
} from "./example";
import type { TabsProps } from "antd";

const Index: TabsProps["items"] = [
  {
    key: "1",
    label: `redux`,
    children: <ReduxView />,
  },
  {
    key: "2",
    label: `自定义 Redux`,
    children: <UseReduxView />,
  },
  {
    key: "3",
    label: `flushSync`,
    children: <BatchedUpdatesView />,
  },
  {
    key: "4",
    label: `AntD Form 表单`,
    children: <AntDForm />,
  },
  {
    key: "5",
    label: `自定义Form表单`,
    children: <Form />,
  },
  {
    key: "6",
    label: `多选卡片`,
    children: <CheckCardView />,
  },
];

export default Index;
