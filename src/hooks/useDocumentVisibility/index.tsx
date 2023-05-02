import { useSafeState, useEventListener } from "..";
import { isBrowser } from "../utils";

type VisibilityProps = "hidden" | "visible" | undefined;

const getVisibility = () => {
  if (!isBrowser) {
    return "visible";
  }
  return document.visibilityState;
};

const useDocumentVisibility = (): VisibilityProps => {
  const [visibility, setVisibility] = useSafeState(() => getVisibility());

  useEventListener(
    "visibilitychange",
    () => {
      setVisibility(getVisibility());
    },
    document
  );

  return visibility;
};

export default useDocumentVisibility;
