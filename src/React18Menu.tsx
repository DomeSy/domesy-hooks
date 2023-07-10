import {
  UseInsertionEffect,
  UseSyncExternalStore,
  UseTransition,
  UseDeferredValue,
  UseId,
} from "./basic";
import type { TabsProps } from "antd";

const Index: TabsProps["items"] = [
  {
    key: "1",
    label: `useInsertionEffect`,
    children: <UseInsertionEffect />,
  },
  {
    key: "2",
    label: `useSyncExternalStore`,
    children: <UseSyncExternalStore />,
  },
  {
    key: "3",
    label: `useTransition`,
    children: <UseTransition />,
  },
  {
    key: "4",
    label: `useDeferredValue`,
    children: <UseDeferredValue />,
  },
  {
    key: "5",
    label: `useId`,
    children: <UseId />,
  },
];

export default Index;
