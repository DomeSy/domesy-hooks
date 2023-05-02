import type { MutableRefObject } from "react";

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document;

type BasicTarget<T extends TargetType = Element> =
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

export default BasicTarget;
