import { useLatest, useUnmount, useCreation } from "..";
import throttle from "lodash/throttle";

type noop = (...args: any[]) => any;

export interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

const useThrottleFn = <T extends noop>(fn: T, options?: ThrottleOptions) => {
  const fnRef = useLatest(fn);

  const throttled = useCreation(
    () =>
      throttle(
        (...args: Parameters<T>): ReturnType<T> => fnRef.current(...args),
        options?.wait ?? 1000,
        options
      ),
    []
  );

  useUnmount(() => {
    throttled.cancel();
  });

  return throttled;
};

export default useThrottleFn;
