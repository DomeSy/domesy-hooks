import {
  UseLasterView,
  UseMountView,
  UseUnmountedRefView,
  UsseSafeStateView,
  UseUpdateView,
  UseCreationView,
  UseReactiveView,
  UseDebounceFnView,
  UseDebounceView,
  UseThrottleFnView,
  UseThrottleView,
  UseLockFnView,
} from "./hooksView";
import type { TabsProps } from "antd";

const Index: TabsProps["items"] = [
  {
    key: "1",
    label: `useLaster`,
    children: <UseLasterView />,
  },
  {
    key: "2",
    label: `useMount`,
    children: <UseMountView />,
  },
  {
    key: "3",
    label: `useUnmountedRef`,
    children: <UseUnmountedRefView />,
  },
  {
    key: "4",
    label: `usseSafeState`,
    children: <UsseSafeStateView />,
  },
  {
    key: "5",
    label: `useUpdate`,
    children: <UseUpdateView />,
  },
  {
    key: "6",
    label: `useCreation`,
    children: <UseCreationView />,
  },
  {
    key: "7",
    label: `useReactive`,
    children: <UseReactiveView />,
  },
  {
    key: "8",
    label: `useDebounceFn`,
    children: <UseDebounceFnView />,
  },
  {
    key: "9",
    label: `useDebounce`,
    children: <UseDebounceView />,
  },
  {
    key: "10",
    label: `useThrottleFn`,
    children: <UseThrottleFnView />,
  },
  {
    key: "11",
    label: `useThrottle`,
    children: <UseThrottleView />,
  },
  {
    key: "12",
    label: `useLockFn`,
    children: <UseLockFnView />,
  },
];

export default Index;
