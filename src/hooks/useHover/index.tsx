import useEventListener from "../useEventListener";
import useSafeState from "../useSafeState";
import type { BasicTarget } from "../utils";

interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
  onChange?: (isHover: boolean) => void;
}

const useHover = (target: BasicTarget, options?: Options): boolean => {
  const { onEnter, onLeave, onChange } = options || {};
  const [isHover, setIsHover] = useSafeState<boolean>(false);

  useEventListener(
    "mouseenter",
    () => {
      onEnter?.();
      onChange?.(true);
      setIsHover(true);
    },
    target
  );

  useEventListener(
    "mouseleave",
    () => {
      onLeave?.();
      onChange?.(false);
      setIsHover(false);
    },
    target
  );

  return isHover;
};

export default useHover;
