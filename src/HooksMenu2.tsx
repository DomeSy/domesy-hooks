import {
  UseCopyView,
  UseTextSelectionView,
  UseResponsiveView,
  UseTrackedEffectView,
  UseHoverView,
  UseDocumentVisibilityView,
  UseFullscreenView,
  UseNetworkView,
  UseCssView,
  UseInViewportView,
  UseSelectionsView,
  UseCountDownView,
} from "./hooksView";
import type { TabsProps } from "antd";

const Index: TabsProps["items"] = [
  {
    key: "13",
    label: `useCopy`,
    children: <UseCopyView />,
  },
  {
    key: "14",
    label: `useTextSelection`,
    children: <UseTextSelectionView />,
  },
  {
    key: "15",
    label: `useResponsive`,
    children: <UseResponsiveView />,
  },
  {
    key: "16",
    label: `useTrackedEffect`,
    children: <UseTrackedEffectView />,
  },
  {
    key: "17",
    label: `useHover`,
    children: <UseHoverView />,
  },
  {
    key: "18",
    label: `useDocumentVisibility`,
    children: <UseDocumentVisibilityView />,
  },
  {
    key: "19",
    label: `useFullscreen`,
    children: <UseFullscreenView />,
  },
  {
    key: "20",
    label: `useNetwork`,
    children: <UseNetworkView />,
  },
  {
    key: "21",
    label: `useCss`,
    children: <UseCssView />,
  },
  {
    key: "22",
    label: `useInViewport`,
    children: <UseInViewportView />,
  },
  {
    key: "23",
    label: `useSelections`,
    children: <UseSelectionsView />,
  },
  {
    key: "24",
    label: `useCountDown`,
    children: <UseCountDownView />,
  },
];

export default Index;
