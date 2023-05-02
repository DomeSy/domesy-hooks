import { useThrottleFn, useSafeState, useCreation } from "..";

import type { ThrottleOptions } from "../useThrottleFn";

const useThrottle = <T,>(value: T, options?: ThrottleOptions) => {
  const [throttled, setThrottled] = useSafeState(value);

  const run = useThrottleFn(() => {
    setThrottled(value);
  }, options);

  useCreation(() => {
    run();
  }, [value]);

  return throttled;
};

export default useThrottle;
