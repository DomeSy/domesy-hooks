// useSyncExternalStore 实现
import { useState, useEffect, useLayoutEffect } from "react";

const useSyncExternalStore = <T,>(
  subscribe: any,
  getSnapshot: () => T,
  getServerSnapshot?: () => T
) => {
  const value = getSnapshot();
  const [{ inst }, forceUpdate] = useState({ inst: { value, getSnapshot } });

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;

    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
  }, [subscribe, value, getSnapshot]);

  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
    const handleStoreChange: any = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);

  return value;
};

function checkIfSnapshotChanged<T>(inst: {
  value: T;
  getSnapshot: () => T;
}): boolean {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !Object.is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

export default useSyncExternalStore;
