import {
  PureComponentView,
  MemoView,
  UsecallbackView,
  UserefView,
  UseSyncExternalStoreView,
  UseTransitionView,
  CurrentView,
} from "./communication";
import type { TabsProps } from "antd";

const Index: TabsProps["items"] = [
  {
    key: "1",
    label: `pureComponent`,
    children: <PureComponentView />,
  },
  {
    key: "2",
    label: `memo`,
    children: <MemoView />,
  },
  {
    key: "3",
    label: `usecallback`,
    children: <UsecallbackView />,
  },
  {
    key: "4",
    label: `useRef`,
    children: <UserefView />,
  },
  {
    key: "5",
    label: `useSyncExternalStore`,
    children: <UseSyncExternalStoreView />,
  },
  {
    key: "6",
    label: `useTransition`,
    children: <UseTransitionView />,
  },
  {
    key: "7",
    label: `current`,
    children: <CurrentView />,
  },
];

export default Index;
