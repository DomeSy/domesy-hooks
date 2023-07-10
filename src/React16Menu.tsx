import {
  UseState,
  UseEffect,
  UseContent,
  UseReducer,
  UseMemo,
  UseCallback,
  UseRef,
  UseImperativeHandle,
  UseLayoutEffect,
} from "./basic";
import type { TabsProps } from "antd";

const React16Menu: TabsProps["items"] = [
  {
    key: "1",
    label: `useState`,
    children: <UseState />,
  },
  {
    key: "2",
    label: `useEffect`,
    children: <UseEffect />,
  },
  {
    key: "3",
    label: `useContent`,
    children: <UseContent />,
  },
  {
    key: "4",
    label: `useReducer`,
    children: <UseReducer />,
  },
  {
    key: "5",
    label: `useMemo`,
    children: <UseMemo />,
  },
  {
    key: "6",
    label: `UseCallback`,
    children: <UseCallback />,
  },
  {
    key: "7",
    label: `UseRef`,
    children: <UseRef />,
  },
  {
    key: "8",
    label: `useImperativeHandle`,
    children: <UseImperativeHandle />,
  },
  {
    key: "9",
    label: `useLayoutEffect`,
    children: <UseLayoutEffect />,
  },
];

export default React16Menu;
