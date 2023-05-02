import { useDebounceFn, useSafeState, useCreation } from "..";

import type { DebounceOptions } from "../useDebounceFn";

const useDebounce = <T,>(value: T, options?: DebounceOptions) => {
  const [debounced, setDebounced] = useSafeState(value);

  const run = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useCreation(() => {
    run();
  }, [value]);

  return debounced;
};

export default useDebounce;
